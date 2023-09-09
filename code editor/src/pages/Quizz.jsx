import React from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchQuizz } from "../api/quizz.api.mjs";
import { useParams } from "react-router-dom";
import Loader from "../components/util/Loader";
import Question from "../components/quizz/Question";

const Quizz = () => {
  const { qid } = useParams();

  const { isLoading, data: quizz } = useQuery({
    queryFn: fetchQuizz,
    queryKey: ["quizz", qid],
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader />;
  console.log(quizz);

  return (
    <Box>
      <Typography variant="h2">{quizz.title}</Typography>

      {quizz.questions.map((question) => (
        <Question question={question} />
      ))}
    </Box>
  );
};

export default Quizz;
