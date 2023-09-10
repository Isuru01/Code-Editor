import React from "react";
import { Card, Typography, Box, Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAssigment } from "../../api/assigment.api.mjs";
import { useNavigate } from "react-router-dom";
import { deleteQuizz } from "../../api/quizz.api.mjs";

const QuizzEditCard = ({ quizz }) => {
  const naviagate = useNavigate();

  // Get the query client
  const queryClient = useQueryClient();

  const handleEdit = (aid, title) => {
    naviagate(`/instructor/`);
  };

  const mutation = useMutation({
    mutationFn: deleteQuizz,
    onSuccess: () => {
      queryClient.invalidateQueries("quizzes");
    },
    onError: () => {},
  });

  const handleDelete = (qid) => {
    console.log(qid);
    mutation.mutateAsync({ qid });
  };

  const { key, title } = quizz;

  return (
    <Card sx={{ minWidth: 400, maxWidth: 500, p: 2 }}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>

      <Typography gutterBottom variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, earum
        sapiente numquam quaerat temporibus ratione recusandae dolorum
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() => handleEdit(key, title)}
        >
          Edit
        </Button>

        <Button
          size="large"
          variant="outlined"
          onClick={() => handleDelete(key)}
        >
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default QuizzEditCard;
