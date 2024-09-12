import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const columns = [
  { field: "title", headerName: "Title", width: 230 },
  { field: "description", headerName: "Description", width: 320 },
  { field: "completed", headerName: "Completed" },
  { field: "createdAt", headerName: "Created At" },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <Button onClick={onClick}>Click</Button>;
    },
  },
];

export const TaskList = ({ tasks = [] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(tasks);
  }, [tasks]);

  return (
    <div style={{ height: "91%", width: "100%" }}>
      <h2>To-Do List</h2>
      <DataGrid
        getRowId={(row) => row.title}
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
