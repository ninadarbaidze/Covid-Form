import { useState, useCallback } from 'react';

const UseFetch = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestInformation) => {
    setError(null);
    try {
      const response = await fetch(requestInformation.url, {
        method: requestInformation.method,
        headers: requestInformation.headers,
        body: requestInformation.body
          ? JSON.stringify(requestInformation.body)
          : null,
      });
      localStorage.clear();
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return {
    error,
    sendRequest,
  };
};

export default UseFetch;
