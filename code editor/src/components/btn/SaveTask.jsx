import React from "react";
import { Box, Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { updateTask } from "../../api/task.api.mjs";
import { AssigmentContext } from "../../context/CreateAssigmentProvider";

const SaveTask = () => {
  //get the context
  const { task, setTasks, setTask } = useContext(AssigmentContext);

  // Get the query client
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      setTask({
        task: "",
        description: "",
      });

      queryClient.invalidateQueries("tasks");
    },
    onerror: () => {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutateAsync(task);
  };

  return (
    <Box>
      <Button type="submit" variant="outlined" onClick={handleSubmit}>
        Save Task
      </Button>
    </Box>
  );
};

export default SaveTask;
