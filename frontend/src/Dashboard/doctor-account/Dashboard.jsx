import React, { useState } from 'react';
import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import useGetProfile from '../../hooks/useFetchData'; // Assuming useFetchData handles fetching data from backend
import { BASE_URL } from '../../config';
import Tabs from './Tabs';
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from '../../pages/Doctors/DoctorAbout.jsx'
import Profile from './Profile.jsx';
import Appointments from './Appointments.jsx'
const Dashboard = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`);
  const [tab, setTab] = useState('overview');
console.log(data);
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loader />}
        {!loading && error && <Error />}
        {!loading && !error && (
          <>
            <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
              <Tabs tab={tab} setTab={setTab} data={data} />
              <div className='lg:col-span-2'>
                
                {data.isApproved === 'pending' && (
                  <div className='flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg mt-10  '>
                    <svg
                      aria-hidden="true"
                      className='flex-shrink-0 w-5 h-5 ml-auto'
                      fill='currentColor'
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 00-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V6zm-2 8a1 1 0 102 0 1 1 0 00-2 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className='sr-only'>Info</span>
                    <div className='ml-3 text-sm font-medium'>
                      To get Approval complete your Profile. It will be reviewed and approved in 3 days
                    </div>
                  </div>
                )}
                <div className='mt-8'>
                {tab === 'overview' && (
 <div className="p-4">
 <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
   <figure className="w-full lg:w-auto max-w-[200px]">
     <img src={data?.photo} alt="User Photo" className="w-full h-auto rounded-md" />
   </figure>
   <div className="w-full lg:w-auto">
     <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
       {data.specialization}
     </span>
     <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
       {data.name}
     </h3>
     
     <p className="text-[15px] lg:max-w-[390px] leading-6 mt-2">
       {data?.bio}
     </p>
   </div>
 </div>
 <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences} />
</div>
)}
                    {tab==='appointments' && <Appointments appointments={data.appointments}/>}
                    {tab==='settings' && <Profile doctorData={data}/>}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
