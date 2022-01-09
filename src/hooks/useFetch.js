import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setisLoading(true);
      setError(false);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        else {
          const data = await res.json();
          setResponse(data);
        }
      } catch (error) {
        setError('Bad Request');
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { response, error, isLoading };
};

export default useFetch;
