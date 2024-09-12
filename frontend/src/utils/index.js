import axios from "axios"
import { TASKS_ENDPOINT } from "./constants"

export const getTasks = (setTasks) => {
  axios
    .get(TASKS_ENDPOINT)
    .then((res) => {
      setTasks(res.data.values)
    }).catch((error) => {
      alert(error)
    })
}