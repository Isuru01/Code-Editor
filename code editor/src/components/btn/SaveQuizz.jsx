import React from "react";
import { Box, Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { updateTask } from "../../api/task.api.mjs";
import { AssigmentContext } from "../../context/CreateAssigmentProvider";
import { QuizzContext } from "../../context/CreateQuizzProvider";
import { updateQuizz } from "../../api/quizz.api.mjs";

const SaveQuizz = () => {
  //get the context
  const { quizz } = useContext(QuizzContext);

  const mutation = useMutation({
    mutationFn: updateQuizz,
    onSuccess: () => {},
    onerror: () => {},
  });

  const handleSubmit = (e) => {
    e.preventDefault(quizz);

    mutation.mutateAsync(quizz);
  };

  return (
    <Box>
      <Button type="submit" variant="outlined" onClick={handleSubmit}>
        Save Quizz
      </Button>
    </Box>
  );
};

export default SaveQuizz;
