import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchAssigments } from "../../api/assigment.api.mjs";
import Loader from "../util/Loader";
import AssigmentCard from "../cards/AssigmentCard";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const AssigmentsResults = () => {
  //fetch the assigments
  const { isLoading, data: assigments } = useQuery({
    queryFn: fetchAssigments,
    queryKey: ["assigments"],
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader />;

  console.log(assigments);
  return (
    <Box>
      {assigments.map((assigment, index) => (
        <AssigmentCard assigment={assigment} />
      ))}
    </Box>
  );
};

export default AssigmentsResults;
