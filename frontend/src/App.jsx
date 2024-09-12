import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TaskList from "./components/TaskList";
import AddTab from "./components/AddTab";
import { getTasks } from "./utils";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  minHeight: "50rem",
}));

// This may be handled in another component but just for the example of this project App.js stores the main states and displays the main components
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(setTasks);
  }, [])

  return (
    <div className="App">
      <Grid container paddingTop={4} spacing={5}>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <Item>
            <AddTab setTasks={setTasks} tasks={tasks}
            />
          </Item>
        </Grid>
        <Grid item xs={7}>
          <TaskList tasks={tasks} setTasks={setTasks} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}

export default App;
