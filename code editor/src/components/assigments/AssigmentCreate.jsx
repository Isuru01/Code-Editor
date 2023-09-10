import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
} from "@mui/material";
import AssigmentIntro from "../forms/AssigmentIntro";
import AssigmentTime from "../forms/AssigmentTime";
import AssigmentTask from "./AssigmentTask";

const steps = ["Assignment Intro", "Assignment Task"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <AssigmentIntro />;
    case 1:
      return <AssigmentTask />;
    default:
      return "Unknown step";
  }
};

const AssigmentCreate = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container sx={{ bgcolor: "#FFFFFF", p: 2 }}>
      <Box>
        <Stepper sx={{ mb: 4 }} activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box>
          {getStepContent(activeStep)}

          <Box sx={{ mt: 2 }}>
            <Button
              sx={{ mr: 2 }}
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>

            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AssigmentCreate;
