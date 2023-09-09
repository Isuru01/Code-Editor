import React from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchQuizzes } from "../api/quizz.api.mjs";
import Loader from "../components/util/Loader";
import QuizzResults from "../components/quizz/QuizzResults";

const Quizzes = () => {
  const { data, isLoading } = useQuery({
    queryFn: fetchQuizzes,
    queryKey: ["quizzes"],
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader />;

  return (
    <Box>
      <QuizzResults />
    </Box>
  );
};

export default Quizzes;
