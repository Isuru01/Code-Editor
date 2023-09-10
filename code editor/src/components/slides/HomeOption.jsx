import React from "react";
import { Box, Container } from "@mui/material";
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
      <Container sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {options.map((option, index) => (
          <OptionCard key={index} option={option} />
        ))}
      </Container>
    </Box>
  );
};

export default HomeOption;
