import React from "react";
import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchAssigments } from "../../api/assigment.api.mjs";
import AssigmentEditCard from "../cards/AssigmentEditCard";
import Loader from "../util/Loader";

const InstructorAssigment = () => {
  //fetch the assigments
  const { isLoading, data: assigments } = useQuery({
    queryFn: fetchAssigments,
    queryKey: ["assigments"],
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader />;

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {assigments?.map((assigment, index) => (
        <AssigmentEditCard assigment={assigment} />
      ))}
    </Container>
  );
};

export default InstructorAssigment;
