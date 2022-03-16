import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (URL) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    refetch();
    
  // eslint-disable-next-line
  }, [URL]);

  const refetch = () => {
    setIsLoading(true);
    axios
      .get(URL)
      .then((response) => setResponse(response.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  return { response, isLoading, error, refetch };
};

export default useFetch;
