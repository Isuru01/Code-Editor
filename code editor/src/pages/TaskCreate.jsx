import React, { useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import TextEditor from "../components/editor/TextEditor";
import EditorUI from "../components/editor/EditorUI";

import CloudinaryUploadWidget from "../components/util/CloudinaryUploadWidget";
import { AssigmentContext } from "../context/CreateAssigmentProvider";
import SaveTask from "../components/btn/SaveTask";

const TaskCreate = () => {
  //get the query params
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const aid = queryParams.get("aid");
  const tid = queryParams.get("tid");
  const title = queryParams.get("task");

  const assigment = queryParams.get("assigment");

  const { task, setTask } = useContext(AssigmentContext);

  const handleChange = (name, value) => {
    setTask((prev) => ({
      ...prev,
      [name]: value,
      assigmentRef: aid,
      task: title,
    }));
  };

  return (
    <Box>
      <SaveTask />

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <Box sx={{ width: 700 }}>
          <Typography variant="h6">
            {task.task} {Number(tid) + 1}
          </Typography>
          <TextEditor handleChange={handleChange} />
          <CloudinaryUploadWidget handleChange={setTask} />
        </Box>

        <Box sx={{ maxHeight: "100vh" }}>
          <EditorUI task={task} setTask={setTask} handleChange={handleChange} />
        </Box>
      </Box>
    </Box>
  );
};

export default TaskCreate;
