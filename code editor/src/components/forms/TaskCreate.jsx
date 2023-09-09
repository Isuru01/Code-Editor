import React, { useContext, useState } from "react";
import { Box, Button, TextField, Stack } from "@mui/material";
import SaveTask from "../btn/SaveTask";
import { useLocation } from "react-router-dom";
import { AssigmentContext } from "../../context/CreateAssigmentProvider";

const TaskCreate = () => {
  //get the query params
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const aid = queryParams.get("aid");
  const assigment = queryParams.get("assigment");

  //context
  const { task, setTask } = useContext(AssigmentContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // set the task
    setTask((prev) => ({
      ...prev,
      [name]: value,
      assigment,
      assigmentRef: aid,
    }));
  };

  return (
    <form>
      <Stack spacing={2}>
        {/* description */}
        <TextField
          name="task"
          fullWidth
          label="Title"
          variant="outlined"
          value={task.task}
          onChange={handleChange}
        />

        {/* description */}
        <TextField
          name="description"
          fullWidth
          rows={5}
          multiline
          label="Description"
          variant="outlined"
          value={task.description}
          onChange={handleChange}
        />
        {/* submit the task */}
        <SaveTask />
      </Stack>
    </form>
  );
};

export default TaskCreate;
