import { useState, useEffect } from 'react';
import DoctorCard from '../../components/Doctors/DoctorCard';
import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';
import Loader from '../../components/Loader/Loading.jsx';
import Error from '../../components/Error/Error.jsx';

const Doctors = () => {
  const [query, setQuery] = useState('');
 
  const[debounceQuery,setDebounceQuery] = useState('');

 const handleSearch=()=>{
   setQuery(query.trim());
   console.log('handle search')
 }

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDebounceQuery(query)
    },300)
    return()=>clearTimeout(timeout);
  },[query])

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className="max-w-full w-[1440px] px-5 mx-auto text-center min-h-[200px]">
          <h2 className='heading'>Find A Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#00ffff2c] rounded-md flex items-center justify-between'>
            <input
              type="search"
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
              placeholder='Search Doctor by name or specialization'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error message={error} />}
          {!loading && !error && (
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 lg:grid-cols-4'>
              {doctors.map((doctor, index) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Doctors;
