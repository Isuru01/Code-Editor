import React, { useContext } from "react";
import { Box, Container, Typography } from "@mui/material";
import QuizzForm from "../components/forms/QuizzCreate";
import { QuizzContext } from "../context/CreateQuizzProvider";
import Quizz from "./Quizz";
import Question from "../components/quizz/Question";

const QuizzCreate = () => {
  const { quizz } = useContext(QuizzContext);

  return (
    <Container>
      <Box>
        <QuizzForm />

        {quizz.questions.map((question) => (
          <Question question={question} />
        ))}
      </Box>
    </Container>
  );
};

export default QuizzCreate;
