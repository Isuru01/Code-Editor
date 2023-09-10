import React, { useState } from "react";
import { Box, Tabs, Tab, Container } from "@mui/material";
import OptionCard from "../cards/OptionCard";
import QuizzResults from "../quizz/QuizzResults";
import AssigmentsResults from "./AssigmentsResults";
import Instructor from "../../pages/Instructor";
import InstructorAssigment from "./InstructorAssigment,";
import InstructorQuizz from "../quizz/InstructorQuizz";

const Overview = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {options.map((option, index) => (
            <OptionCard key={index} option={option} onClick={handleChange} />
          ))}
        </Box>
      </Container>

      <Container>
        <Tabs sx={{ mb: 4 }} value={value} onChange={handleChange}>
          <Tab label="Quizzes" />
          <Tab label="Assignments" />
        </Tabs>

        {value === 0 && <InstructorQuizz />}
        {value === 1 && <InstructorAssigment />}
      </Container>
    </>
  );
};

const options = [
  { title: "Create Assignment", link: "/instructor/assigment/create" },
  { title: "Create Quiz", link: "/instructor/quizz/create" },
];

export default Overview;
