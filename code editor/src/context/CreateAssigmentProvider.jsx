import React, { createContext, useState } from "react";
import { useContext } from "react";

export const AssigmentContext = createContext();

const CreateAssigmentProvider = ({ children }) => {
  //submit setSubmit
  const [submit, setSubmit] = useState(0);

  //assigment details
  const [assigment, setAssigment] = useState({});

  //tasks state
  const [tasks, setTasks] = useState([]);

  //task
  const [task, setTask] = useState({
    tid: "",
    task: "",
    instruction: "",
    taskPdf: "",
    lang: "",
    code: "",
  });

  //context states
  const value = {
    submit,
    setSubmit,
    assigment,
    setAssigment,
    task,
    setTask,
    tasks,
    setTasks,
  };

  return (
    <AssigmentContext.Provider value={value}>
      {children}
    </AssigmentContext.Provider>
  );
};

export { CreateAssigmentProvider };
