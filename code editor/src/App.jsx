import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Editor,
  Instructor,
  TaskCreate,
  Assigment,
  Assigments,
  Quizz,
  Quizzes,
  Task,
} from "./pages/index.mjs";
import { CreateAssigmentProvider } from "./context/CreateAssigmentProvider";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/instructor/:type/:action?" element={<Instructor />} />
        <Route path="/assigments" element={<Assigments />} />
        <Route path="/assigments/:aid" element={<Assigment />} />
        <Route path="/assigments/:aid/:tid" element={<Task />} />

        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quizzes/:qid" element={<Quizz />} />

        <Route
          path="/instructor/:aid/task"
          element={
            <CreateAssigmentProvider>
              <TaskCreate />
            </CreateAssigmentProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
