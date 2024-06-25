import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from '../../components/Doctors/DoctorCard.jsx';
import Error from '../../components/Error/Error.jsx'
import Loading from '../../components/Loader/Loading.jsx';

const MyBookings = () => {
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);
  
  // Debug: Log the appointments to verify data structure
  
  
  // Check if appointments is defined and is an array
  
  
  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}
      {!loading && !error && (
        <>
          {appointments.doctors.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {appointments.doctors.map(doctor => {
                // Debug: Log each doctor object to ensure it's being passed correctly
                console.log('doctor:', doctor);
                return <DoctorCard doctor={doctor} key={doctor._id} />
              })}
            </div>
          ) : (
            <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">You did not book any doctor yet!</h2>
          )}
        </>
      )}
    </div>
  );
};

export default MyBookings;
