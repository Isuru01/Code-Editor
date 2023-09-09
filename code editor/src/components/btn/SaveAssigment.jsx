import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { updateAssigment } from "../../api/assigment.api.mjs";
import { AssigmentContext } from "../../context/CreateAssigmentProvider";
import { useNavigate } from "react-router-dom";

const SaveAssigment = () => {
  const navigate = useNavigate();
  const { assigment, setAssigment, setSubmit } = useContext(AssigmentContext);

  //mutation
  const mutation = useMutation({
    mutationFn: updateAssigment,
    onSuccess: (data) => {
      setAssigment(data);
      navigate(
        `/instructor/assigment/create?assigment=${data.title}&aid=${data.key}`
      );
    },
    onError: () => {},
  });

  //submit the data to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmit((prev) => prev + 1);

    if (assigment.title !== "") mutation.mutateAsync(assigment);
  };

  return (
    <Box>
      <Button type="submit" variant="outlined" onClick={handleSubmit}>
        Save Assigment
      </Button>
    </Box>
  );
};

export default SaveAssigment;
