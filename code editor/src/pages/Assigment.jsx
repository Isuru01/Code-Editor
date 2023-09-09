import React from "react";
import { Box, Paper, Typography, Button, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchAssigment } from "../api/assigment.api.mjs";
import Loader from "../components/util/Loader";
import { useNavigate, useParams } from "react-router-dom";
import Assigments from "./Assigments";

const Assigment = () => {
  //use params
  const { aid } = useParams();
  const naviagte = useNavigate();

  //fetch assigment
  const { isLoading, data: assigment } = useQuery({
    queryFn: fetchAssigment,
    queryKey: ["assigment", aid],
    onSuccess: () => {},
    onError: () => {},
  });

  const handleNavigate = (task) => {
    naviagte(`/assigments/${aid}/${task}`);
  };

  if (isLoading) return <Loader />;

  return (
    <Box>
      {assigment.tasks?.map((task, index) => (
        <Box
          component={Paper}
          elevation={2}
          sx={{ p: 2, mb: 2, maxWidth: 800 }}
        >
          <Stack>
            <Typography variant="h6">{task.task}</Typography>
            <Typography color="text.secondary" sx={{ minHeight: 100 }}>
              {task.description}
            </Typography>

            <Button
              variant="contained"
              onClick={() => handleNavigate(task.key)}
            >
              Visit
            </Button>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default Assigment;
