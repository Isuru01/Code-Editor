import React from "react";
import { Box } from "@mui/material";
import OptionCard from "../cards/OptionCard";

const Overview = () => {
  const handleNavigate = () => {};

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {options.map((option, index) => (
        <OptionCard key={index} option={option} onClick={handleNavigate} />
      ))}
    </Box>
  );
};

const options = [
  { title: "Create Assigment", link: "/instructor/assigment/create" },
  { title: "Create Quizz", link: "/instructor/quizz/create" },
];

export default Overview;
