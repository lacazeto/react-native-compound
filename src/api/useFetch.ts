import { useState, useEffect } from "react";
import { CustomFetchResponse, ApiResponseValidatorCb } from "types/api-calls";
import * as R from "ramda";

const useFetch = <T>(
  url: string,
  fetchOptions?: RequestInit,
  validateResponse?: ApiResponseValidatorCb<T>
): CustomFetchResponse<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((data: T) => {
        return R.ifElse(
          () => R.isNil(validateResponse),
          () => Promise.resolve(data),
          () =>
            R.pipe(
              validateResponse!,
              R.ifElse(
                (result: ReturnType<ApiResponseValidatorCb<T>>) => result.isValid,
                () => Promise.resolve(data),
                (result) => {
                  throw result.error;
                }
              )
            )(data)
        )();
      })
      .then((data: T) => {
        console.log(data);
        setResponse(data);
      })
      .catch((error: Error) => {
        console.error(error.toString());
        setError(error.toString());
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { response, error, loading };
};

export default useFetch;
