import { useState, useEffect } from "react";

export default function useFetchAgentApi() {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const url = "http://localhost:8080/api/agents";

  const fetchCall = () =>
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((result) => result);

  useEffect(() => {
    fetchCall().then(
      (result) => {
        setIsLoading(false);
        setResult(result);
      },
      (e) => {
        setIsLoading(false);
        setError(e);
      }
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { fetchCall, result, error, isLoading };
}
