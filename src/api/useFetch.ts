import { useState, useEffect } from "react";
import { CustomFetchResponse } from "types/api-calls";

const useFetch = <T>(
  url: string,
  fetchOptions?: RequestInit
): CustomFetchResponse<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { response, error, loading };
};

export default useFetch;
