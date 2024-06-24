import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const updateDoctor = async(req,res)=>{
    const id = req.params.id

    try{
       const updatedDoctor = await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true})
       res.status(200).json({success:true,message:'successfully updated',data:updatedDoctor})
    }
    catch(error)
    {
       res.status(500).json({success:false,message:'failed to update'})
    }
}



export const deleteDoctor = async(req,res)=>{
    const id = req.params.id

    try{
      await Doctor.findByIdAndDelete(id,);
       res.status(200).json({success:true,message:'successfully delted'})
    }
    catch(error)
    {
       res.status(500).json({success:false,message:'failed to delete'})
    }
}

export const getSingleDoctor = async(req,res)=>{
    const id = req.params.id

    try{
       const doctor = await Doctor.findById(id).populate('reviews').select("-password");
       res.status(200).json({success:true,message:'Doctor found',data:doctor})
    }
    catch(error)
    {
       res.status(404).json({success:false,message:'Doctor not found'})
    }
}

export const getAllDoctor = async (req, res) => {
    try {
        const {query} = req.query
        let doctors;
        if(query)
            {
                doctors = await Doctor.find({isApproved:'approved',$or:[{name:{$regex:query,$options:'i'}},{specialization:{$regex:query,$options:'i'}}]}).select('-password');
            }
        else
        {
             doctors = await Doctor.find({isApproved:'approved'}).select("-password");
        }
       
         
        res.status(200).json({ success: true, message: 'Doctors found', data: doctors });
        
    } catch (error) {
         
        res.status(500).json({ success: false, message: 'Failed to fetch Doctors' });
    }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;

  try {
    // Attempt to find the doctor by ID
    const doctor = await Doctor.findById(doctorId);

    // If doctor is not found, return a 404 error
    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    // Extract all properties from the doctor object except the password
    const { password, ...rest } = doctor._doc;

    // Fetch appointments associated with the doctor
    const appointments = await Booking.find({ doctor: doctorId });

    // Return success response with profile information and appointments
    res.status(200).json({
      success: true,
      message: 'Getting Profile Info',
      data: { ...rest, appointments }
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error fetching doctor profile:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch doctor profile' });
  }
};
