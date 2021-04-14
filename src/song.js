/*import React, { useState,  useEffect} from 'react';

const API_URL = "https://api.spotify.com/v1/browse/new-releases"


function MyComponent() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(async () => {
    const abortController = new AbortController();

    try {
      const response = await fetch(API_URL, {
        signal: abortController.signal
      });

      if (response.status >= 300)
        throw new Error(response.statusText);

      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (e) {
      if (e.name != "AbortError") setError(e.message);
    }

    return () => abortController.abort();
  }, []);

  if (!!error) return <h2>{error}</h2>;

  if (loading) return <h2>Loading...</h2>;

  return <h2>{data}</h2>;
}

export default MyComponent;

*/