import React, { useContext, useState } from "react";
import { Box, Typography, Paper, Button, Stack } from "@mui/material";
import TaskCreate from "../forms/TaskCreate";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { AssigmentContext } from "../../context/CreateAssigmentProvider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteTask, fetchTasks } from "../../api/task.api.mjs";
import Loader from "../util/Loader";

const AssigmentTask = ({ onChange, value }) => {
  const naviagate = useNavigate();

  //query params
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const aid = queryParams.get("aid");
  const assigment = queryParams.get("assigment");

  //query client
  const queryClient = useQueryClient();

  //context
  const { setTasks } = useContext(AssigmentContext);

  const mutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
    onError: () => {},
  });

  //load the data
  const { isLoading, data: tasks } = useQuery({
    queryFn: fetchTasks,
    queryKey: ["tasks", aid],
    onSuccess: (data) => {},
    onerror: () => {},
  });

  if (isLoading) return <Loader />;

  const handleNavigate = (task, tid) => {
    console.log(task);
    naviagate(
      `/instructor/${aid}/task?aid=${aid}&assigment=${assigment}&task=${task}&tid=${tid}`
    );
  };

  const handleDelete = (tid) => {
    mutation.mutateAsync({ tid });
  };

  console.log(tasks);

  return (
    <Box>
      <TaskCreate />

      {tasks?.map((task, index) => (
        <Box
          component={Paper}
          elevation={2}
          sx={{ p: 2, mb: 2, maxWidth: 800 }}
        >
          <Stack spacing={2}>
            <Typography variant="h6">{task.task}</Typography>
            <Typography color="text.secondary">{task.description}</Typography>

            <Box>
              <Button
                variant="outlined"
                onClick={() => handleDelete(task.key)}
                sx={{ mr: 1 }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => handleNavigate(task.task, task.key)}
              >
                Add
              </Button>
            </Box>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default AssigmentTask;
