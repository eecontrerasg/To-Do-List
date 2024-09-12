import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import { TASKS_ENDPOINT } from "../utils/constants";
import { getTasks } from "../utils";


export const TaskList = ({ tasks = [], setTasks }) => {

  const columns = [
    { field: "id", headerName: "id" },
    { field: "title", headerName: "Title", width: 230 },
    { field: "description", headerName: "Description", width: 230 },
    {
      field: "completed", headerName: "Completed", renderCell: (params) => params.value ? "Completed" : "Incomplete"
    },
    {
      field: "createdAt", headerName: "Created At",
      renderCell: (params) => new Date(params.value).toLocaleString(),
      width: 170
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();
          axios.delete(`${TASKS_ENDPOINT}${params.row.id}`, { ...params.row, completed: true }).then((res) => { 
            alert(res.data.message);
            getTasks(setTasks);
          })
        };

        const markCompleted = (e) => {
          e.stopPropagation();
          axios.put(`${TASKS_ENDPOINT}${params.row.id}`, { ...params.row, completed: true }).then((res) => { 
            alert(res.data.message);
            getTasks(setTasks);
          })
        }


        return <>
          <IconButton onClick={markCompleted} color="primary" aria-label="edit">
            <DoneIcon />
          </IconButton>
          <IconButton onClick={onClick} color="primary" aria-label="edit">
            <DeleteIcon />
          </IconButton>
        </>;
      },
    },
  ];


  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(tasks);
  }, [tasks]);

  return (
    <div style={{ height: "91%", width: "100%" }}>
      <h2>To-Do List</h2>
      <DataGrid
        getRowId={(row) => row.id}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[15, 30]}
      />
    </div>
  );
};

export default TaskList;
