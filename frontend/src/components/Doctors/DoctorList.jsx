import React from 'react';
import DoctorCard from './DoctorCard.jsx';
import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';
import Loader from '../../components/Loader/Loading.jsx';
import Error from '../Error/Error.jsx';

const DoctorList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error message={error} />}
      {!loading && !error && (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;
