import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTask } from "../api/task.api.mjs";
import TextEditor from "../components/editor/TextEditor";
import EditorUI from "../components/editor/EditorUI";
import Loader from "../components/util/Loader";
import CloudinaryUploadWidget from "../components/util/CloudinaryUploadWidget";

const Task = () => {
  const { tid, aid } = useParams();

  const [task, setTask] = useState({
    lang: "java",
  });

  //fetch the data
  const { data, isLoading } = useQuery({
    queryFn: fetchTask,
    queryKey: ["task", tid],
    onSuccess: (data) => {
      setTask(data);
    },
    onError: () => {},
  });

  if (isLoading) return <Loader />;

  console.log(task);

  const handleChange = () => {};

  return (
    <Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <Box sx={{ width: 700 }}>
          <Typography variant="h6"></Typography>

          <Box dangerouslySetInnerHTML={{ __html: task.instruction }} />
          <CloudinaryUploadWidget handleChange={setTask} />
        </Box>

        <Box sx={{ maxHeight: "100vh" }}>
          <EditorUI task={task} setTask={setTask} handleChange={handleChange} />
        </Box>
      </Box>
    </Box>
  );
};

export default Task;
