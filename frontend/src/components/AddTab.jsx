import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { fetchWildfireData } from "../services/dataService";

const AddTab = ({
  filter,
  setFilter,
  setWildfireData,
  setIsLoading,
  setClicked,
}) => {
  const [dateValue, setDateValue] = useState(null);

  const searchData = async () => {
    setIsLoading(true);
    const data = [];
    setWildfireData(data);
    setIsLoading(false);
    setClicked(true);
  };

  return (
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
          defaultValue=""
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={() => searchData()}>
          Add task
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTab;
