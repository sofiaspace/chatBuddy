import axios from "axios";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<string>("");

  const fetchData = async (message: string) => {
    setIsLoading(true);

    try {
      const res = await axios.post(`${API_URL}/api/chat`, { message });
      setData(res.data.reply);
      console.log(data);
    } catch (err) {
      console.error("Chat error:", err);
      setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, fetchData };
};
