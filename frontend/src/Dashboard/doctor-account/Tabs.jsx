import { useContext, useState, useEffect } from 'react';
import { BiMenu } from "react-icons/bi";
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { BASE_URL, token } from '../../config';
const Tabs = ({ tab, setTab, data }) => {

  const {  dispatch } = useContext(authContext);
  console.log(data._id,'data')
  const handleDeleteAccount = async () => {
    const confirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (confirmed){
    try {
      
      
      const response = await fetch(`${BASE_URL}/doctors/${data._id}`, {
        method: 'delete',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log('yes')
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
    }}
  };
    const handleLogOut = () => {
        dispatch({ type: "LOGOUT" });
        Navigate('/')
      };
      
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex w-full flex-col p-[10px] bg-white shadow-panelShadow items-center h-max rounded-md mt-10 mb-20">
        <button
          onClick={() => setTab('overview')}  
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}   
        >
          Overview
        </button>
        <button
          onClick={() => setTab('appointments')}   
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}  
        >
          Appointments
        </button>
        <button
          onClick={() => setTab('settings')} 
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}  
        >
          Profile Setting
        </button>
        <div className='mt-[100px] w-full'>
              <button onClick={handleLogOut} className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>Logout</button>
              <button onClick={handleDeleteAccount} className='w-full bg-red-600 p-3 mt-4 text-[16px] leading-7 rounded-md text-white'>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
