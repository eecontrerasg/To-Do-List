import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TaskList from "./components/TaskList";
import AddTab from "./components/AddTab";
import { LoadingComponent } from "./components/LoadingComponent/LoadingComponent";
import { useGetTasks } from "./hooks/useGetTasks";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  minHeight: "50rem",
}));

// This may be handled in another component but just for the example of this project App.js stores the main states and displays the main components
function App() {
  // This main states can be handled using context or a state handler like redux, just for the easesiness of the project will work as the main state handler
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [filter, setFilter] = useState({ month: "", year: "" });
  const [tasks, setTasks] = useState([]);

  useGetTasks();

  return (
    <div className="App">
      <LoadingComponent isLoading={isLoading} />
      <Grid container paddingTop={4} spacing={5}>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <Item>
            <AddTab
              setWildfireData={setTasks}
              filter={filter}
              setFilter={setFilter}
              setIsLoading={setIsLoading}
              setClicked={setClicked}
            />
          </Item>
        </Grid>
        <Grid item xs={7}>
          <TaskList tasks={tasks} setClicked={setClicked} clicked={clicked} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}

export default App;
