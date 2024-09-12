import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { TASKS_ENDPOINT } from "../utils/constants";
import axios from "axios";

const AddTab = ({ tasks, setTasks}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addData = () => {
    const newTask = {
      title: title.target.value,
      description: description.target.value,
      completed: false,
      createdAt: (new Date()).getTime(),
    }

    axios.post(TASKS_ENDPOINT, newTask)
      .then(function (response) {
        setTasks([...tasks, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={addData}>
      <Grid container spacing={3} marginBlockEnd={4}>
        <Grid justifyContent="flex-between" item xs={12}>
          <h1>To-Do List</h1>
          Here is the space where you can add new tasks, take into consideration
          that all new task are created as incompleted
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Title"
            onChange={(newValue) => setTitle(newValue)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            onChange={(newValue) => setDescription(newValue)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Add task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTab;
