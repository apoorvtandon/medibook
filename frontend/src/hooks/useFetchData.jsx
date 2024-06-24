import { useState, useEffect } from 'react';
import { token } from '../config';
const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
            try {
              const res = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`, // Replace with your actual token variable
                     
                },
            });
            const result = await res.json();
         
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
               
                setData(result.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }  
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchData;
