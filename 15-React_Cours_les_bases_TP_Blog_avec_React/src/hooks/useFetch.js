import { useEffect, useState } from "react";
const EmptyObject = {};

/**
 *
 * @param {string} url
 * @param {FetchEventInit} options
 * @returns
 */

export function useFetch(url, options = EmptyObject) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      ...options,
      headers: {
        Accept: "application/json; charset=UTF-8",
        ...options?.headers,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url,options]);

  return {
    loading,
    data,
    error,
    setData
  };
}
