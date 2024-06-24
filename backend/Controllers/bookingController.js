import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import Booking from '../models/BookingSchema.js';
import Stripe from 'stripe';

export const getCheckoutSession = async (req, res) => {

    console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY);
console.log('CLIENT_SITE_URL:', process.env.CLIENT_SITE_URL);

  try {
    const { doctorId } = req.params;
    const { userId } = req; // Assuming you have the user ID from authentication middleware

    if (!doctorId || !userId) {
      return res.status(400).json({ success: false, message: 'Doctor ID and User ID are required' });
    }

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
      client_reference_id: doctorId,
      line_items: [
        {
          price_data: {
            currency: 'inr',
            unit_amount: doctor.ticketPrice * 100,
            product_data: {
              name: doctor.name,
              description: doctor.bio,
              images: [doctor.photo],
            },
          },
          quantity: 1,
        },
      ],
    });

    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      session: session.id,
    });

    await booking.save();
    res.status(200).json({ success: true, message: 'Successfully Paid', session });
  } catch (err) {
    console.error(err); // Log the error to see more details in the console
    res.status(500).json({ success: false, message: 'Payment not successful', error: err.message });
  }
};
