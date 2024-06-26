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
                        Authorization: `Bearer ${token}`, // Ensure token is correctly imported and used
                        // Other headers if needed
                    },
                });


                const result = await res.json();
                
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                setData(result.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
                console.error('Error fetching data:', error); // Log the error to console
            }
        };

        fetchData();
    }, [url]); // Dependency array ensures useEffect runs when `url` changes

    return { data, loading, error };
};

export default useFetchData;
