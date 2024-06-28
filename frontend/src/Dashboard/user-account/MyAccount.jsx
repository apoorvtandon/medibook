import { useContext, useState, useEffect } from 'react';
import userImg from '../../assets/images/doctor-img01.png';
import { authContext } from '../../context/AuthContext';
import useGetProfile from '../../hooks/useFetchData'; // Assuming useFetchData handles fetching data from backend
import uploadImageToCloundinary from '../../utils/uploadCloudinary.js';
import { BASE_URL,  token } from '../../config';
import MyBookings from './MyBookings';
import Profile from './Profile';
import Loading from '../../components/Loader/Loading.jsx';
import Error from '../../components/Error/Error.jsx';
import { useParams } from 'react-router-dom';
export default function Myaccount() {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState('bookings');
  const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);
 
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  
  const handleDeleteAccount = async () => {
    try {
      
      
      const response = await fetch(`${BASE_URL}/users/${userData._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        dispatch({ type: 'LOGOUT' }); // Example logout action if needed
        // Perform any other cleanup or redirection logic after successful deletion
        console.log('Account deleted successfully');
      } else {
        console.error('Failed to delete account');
        // Handle error scenario as needed
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      // Handle error scenario as needed
    }
  };
  

  console.log(userData)

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto mt-20 mb-20'>
        {loading && !error && <Loading/>}
        {error && !loading && <Error errorMessage={error}/>}
        {
          !loading && !error && (
            <div className='grid md:grid-cols-3 gap-10'>
          <div className='pb-[50px] px-[30px] rounded-md'>
            <div className='flex items-center justify-center'>
              <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                <img src={userData.photo} alt="User" className='w-full h-full rounded-full' />
              </figure>
            </div>
            <div className='text-center mt-4'>
              <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>{userData.name}</h3>
              <p className='text-textColor text-[15px] leading-6 font-medium'>{userData.email}</p>
              <p className='text-textColor text-[15px] leading-6 font-medium'>
                Blood Type : <span className='ml-1 text-headingColor text-[20px]'>{userData.bloodType}</span>
              </p>
            </div>
            <div className='mt-[50px] md:mt-[100px]'>
              <button onClick={handleLogOut} className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>Logout</button>
              <button  onClick={handleDeleteAccount} className='w-full bg-red-600 p-3 mt-4 text-[16px] leading-7 rounded-md text-white'>Delete Account</button>
            </div>
          </div>
          <div>
            <button onClick={() => setTab('bookings')} className={`${tab === 'bookings' && 'bg-primaryColor text-white font-normal'} py-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
              My Bookings
            </button>
            <button onClick={() => setTab('settings')} className={`${tab === 'settings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
              Profile Settings
            </button>
            {tab === 'bookings' && <MyBookings />}
          {tab === 'settings' && <Profile user={userData} />}
          </div>

          
        </div>
          )
        }
      </div>
    </section>
  );
}
