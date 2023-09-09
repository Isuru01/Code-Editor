import { useState } from "react";

const useAssigmentState = () => {
  const [assigment, setAssigment] = useState({
    title: "",
    description: "",
  });
  return [assigment, setAssigment];
};

const useTimestampState = () => {
  const [timestamp, setTimestamp] = useState({
    start: "",
    end: "",
    duration: "",
  });
  return [timestamp, setTimestamp];
};

const useTasksState = () => {
  const [tasks, setTasks] = useState([]);
  return [tasks, setTasks];
};

export const useStates = () => {
  const [assigment, setAssigment] = useAssigmentState();
  const [timestamp, setTimestamp] = useTimestampState();
  const [tasks, setTasks] = useTasksState();

  return {
    assigment,
    setAssigment,
    timestamp,
    setTimestamp,
    tasks,
    setTasks,
  };
};
