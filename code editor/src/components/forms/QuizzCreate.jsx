import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import TextEditor from "../editor/TextEditor";
import { QuizzContext } from "../../context/CreateQuizzProvider";
import SaveQuizz from "../btn/SaveQuizz";

const QuizzCreate = () => {
  const { question, setQuestion, quizz, setQuizz, answer, setAnswer } =
    useContext(QuizzContext);

  console.log(quizz);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuizz((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handle the answer
  const handleAnswer = (e) => {
    const { name, value } = e.target;

    setAnswer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //submit the answer
  const submitAnswer = () => {
    setQuestion((prev) => ({
      ...prev,
      answers: [...prev.answers, answer],
    }));

    setAnswer({
      isAnswer: false,
      answer: "",
    });
  };

  //handle QUestion
  const handleQuestion = (name, value) => {
    setQuestion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event, index) => {
    // Get the current value of the checked property
    const checked = event.target.checked;

    // Update the isAnswer property of the selected answer
    setQuestion((prev) => {
      const updatedAnswers = [...prev.answers];
      updatedAnswers[index].isAnswer = checked;
      return {
        ...prev,
        answers: updatedAnswers,
      };
    });
  };

  const handleSubmit = () => {
    setQuizz((prev) => ({
      ...prev,
      questions: [...prev.questions, question],
    }));

    setQuestion({
      question: "",
      answers: [],
      solution: "",
    });
  };

  return (
    <Box>
      <form>
        <Stack spacing={2}>
          {/* description */}
          <TextField
            name="title"
            fullWidth
            label="Title"
            variant="outlined"
            value={quizz.title}
            onChange={handleChange}
          />

          {/* description */}
          <TextField
            name="description"
            fullWidth
            rows={5}
            multiline
            label="Description"
            variant="outlined"
            value={quizz.description}
            onChange={handleChange}
          />
          {/* submit the task */}
        </Stack>
      </form>

      <form>
        <Stack spacing={2}>
          <TextEditor
            name="question"
            handleChange={handleQuestion}
            value={question.question}
          />

          <Box>
            <TextField
              label="Answer"
              value={answer.answer}
              fullWidth
              size="small"
              name="answer"
              onChange={handleAnswer}
            />

            <Button sx={{ mt: 2 }} variant="outlined" onClick={submitAnswer}>
              Add An Answer
            </Button>
          </Box>

          {question.answers.map((answer, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={answer.isAnswer}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              }
              label={answer.answer}
            />
          ))}

          <TextEditor
            name="solution"
            handleChange={handleQuestion}
            value={question.solution}
          />

          <Button onClick={handleSubmit}>Add Question</Button>

          <SaveQuizz />
        </Stack>
      </form>
    </Box>
  );
};

export default QuizzCreate;
