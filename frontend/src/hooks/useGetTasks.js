import { useEffect, useState } from "react";
import taskService from "../services/dataService";

export const useGetTasks = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    taskService
      .getTasks()
      .then((result) => {
        console.log("res", result.values);
        setData(result);
      })
      .catch((err) => {});
  }, []);

  return data;
};
