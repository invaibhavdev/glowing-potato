import { useState } from "react";
import { message } from "antd";
export const useFetchPost = (url) => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);
  const send = (payload) => {
    setLoading(true);
    const fetcher = async () => {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        console.log(data);
        if (data.success) {
          message.success(data.message || "Welcome back!");

          setApiData(data);
        } else {
          message.error(data.message || "Some error occurred");
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setServerError(error);
        setLoading(false);
        message.error("This is an error message");
      }
    };

    fetcher();
  };
  return { send, loading, apiData, serverError };
};
