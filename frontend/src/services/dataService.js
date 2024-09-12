const API_BASE_URL = "http://localhost:4001/";
const TASKS_ENDPOINT = `${API_BASE_URL}tasks/`;

const taskService = {};

taskService.getTasks = () => {
  return fetch({
    url: TASKS_ENDPOINT,
    method: "GET",
  });
};

// export const fetchTasksData = async () => {
//   const response = await fetch(TASKS_ENDPOINT);
//   const tasks = await response.json();
//   return tasks;
// };

export default taskService;
