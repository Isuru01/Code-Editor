import React from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchQuizzes } from "../../api/quizz.api.mjs";
import Loader from "../util/Loader";
import QuizzCard from "../cards/QuizzCard";

const QuizzResults = () => {
  //fetch quizz
  const { data: quizzes, isLoading } = useQuery({
    queryFn: fetchQuizzes,
    queryKey: ["quizz"],
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader />;

  return (
    <Box>
      {quizzes.map((quizz) => (
        <QuizzCard key={quizz.key} quizz={quizz} />
      ))}
    </Box>
  );
};

export default QuizzResults;
