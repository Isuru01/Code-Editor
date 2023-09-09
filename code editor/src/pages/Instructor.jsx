import React from "react";
import { Box } from "@mui/material";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import AssigmentCreate from "../components/assigments/AssigmentCreate";
import OptionCard from "../components/cards/OptionCard";
import { CreateAssigmentProvider } from "../context/CreateAssigmentProvider";
import Overview from "../components/assigments/Overview";
import { QuizzCreate } from "./index.mjs";
import { CreateQuizzProvider } from "../context/CreateQuizzProvider";

const Instructor = () => {
  const { type, action } = useParams();

  return (
    <Box>
      {type === "overview" &&
        (action === "undefined" || action === undefined) && <Overview />}

      {type === "assigment" && action === "create" && (
        <CreateAssigmentProvider>
          <AssigmentCreate />
        </CreateAssigmentProvider>
      )}

      {type === "quizz" && action === "create" && (
        <CreateQuizzProvider>
          <QuizzCreate />
        </CreateQuizzProvider>
      )}
    </Box>
  );
};

export default Instructor;
