import { useContext, useState, useEffect } from 'react';
import { BiMenu } from "react-icons/bi";
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
const Tabs = ({ tab, setTab }) => {

  const { dispatch } = useContext(authContext);


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
          onClick={() => setTab('overview')}  // Corrected syntax
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}  // Corrected w-full
        >
          Overview
        </button>
        <button
          onClick={() => setTab('appointments')}  // Corrected syntax
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}  // Corrected w-full
        >
          Appointments
        </button>
        <button
          onClick={() => setTab('settings')}  // Corrected syntax
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}  // Corrected w-full
        >
          Profile Setting
        </button>
        <div className='mt-[100px] w-full'>
              <button onClick={handleLogOut} className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>Logout</button>
              <button className='w-full bg-red-600 p-3 mt-4 text-[16px] leading-7 rounded-md text-white'>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
