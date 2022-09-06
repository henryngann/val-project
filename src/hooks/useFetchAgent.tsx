import { useState, useEffect } from "react";
import { Root } from "react-dom/client";

export default function useFetchAgentApi() {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://localhost:8080/api/agents`;

  const doCall = () =>
    fetch(url)
      .then((res) => res.json())
      .then((result) => result);

  useEffect(() => {
    doCall().then(
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

  return { doCall, result, error, isLoading };
}
