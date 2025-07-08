import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError("");
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something wet Wrong");
        }
        setLoading(false);
        const fetched_data = await response.json();
        setData(fetched_data)
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
