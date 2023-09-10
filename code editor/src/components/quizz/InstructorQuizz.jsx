import React from "react";
import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchAssigments } from "../../api/assigment.api.mjs";
import AssigmentEditCard from "../cards/AssigmentEditCard";
import Loader from "../util/Loader";
import { fetchQuizzes } from "../../api/quizz.api.mjs";
import QuizzEditCard from "../cards/QuizzEditCard";

const InstructorQuizz = () => {
  //fetch quizz
  const { data: quizzes, isLoading } = useQuery({
    queryFn: fetchQuizzes,
    queryKey: ["quizz"],
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader />;

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {quizzes?.map((quizz, index) => (
        <QuizzEditCard key={index} quizz={quizz} />
      ))}
    </Container>
  );
};

export default InstructorQuizz;
