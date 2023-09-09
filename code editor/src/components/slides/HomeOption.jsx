import React from "react";
import { Box } from "@mui/material";
import OptionCard from "../cards/OptionCard";

const options = [
  { title: "Code Editor", link: "/editor" },
  { title: "Assigments", link: "/assigments" },
  { title: "Quizz", link: "/quizzes" },
  { title: "Chat Bot", link: "" },
  { title: "Instrcutors", link: "/instructor/overview" },
];

const HomeOption = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {options.map((option, index) => (
          <OptionCard key={index} option={option} />
        ))}
      </Box>
    </Box>
  );
};

export default HomeOption;
