# MediBook

MediBook is a robust Doctor Appointment App built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It simplifies the process of scheduling appointments and enhances user-doctor interactions.

## Features

### Frontend
- **UI with React.js and Tailwind CSS:**
  - Ensures a responsive and modern user interface.
  - Tailwind CSS for efficient styling and customization.

- **Profile Dashboard:**
  - **Users:** Manage appointments, update profiles, and view appointment history.
  - **Doctors:** View appointment schedules and manage patient bookings.

### Backend
- **Node.js and Express.js APIs:**
  - Provides robust backend functionality for managing:
    - Booking appointments.
    - User reviews.
    - User and doctor authentication using JWT (JSON Web Tokens).

- **MongoDB Integration:**
  - Efficient storage and retrieval of data.
  - Stores user profiles, appointment details, and other relevant information securely.

- **Stripe Integration:**
  - Secure payment processing using Stripe for booking transactions.

 ## Installation

To run MediBook locally, clone the repository using `git clone https://github.com/apoorvtandon/medibook`, navigate into the `MediBook` directory, and install backend dependencies with `cd backend && npm install`. Then, switch to the `frontend` directory (`cd ../frontend`) and install frontend dependencies using `npm install`. Start the backend server (`cd ../backend && npm run dev`) followed by the frontend development server (`cd ../frontend && npm run dev`). Finally, open your browser and visit `http://localhost:5173` to use MediBook locally.

