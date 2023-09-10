import dayjs from "dayjs";
import Assigment from "../models/assigment.model.mjs";
import Task from "../models/task.model.mjs";

const updateAssigment = async (req, res, next) => {
  const assigment = req.body;

  try {
    const updatedAssigment = await Assigment.findOneAndUpdate(
      { title: assigment.title, group: assigment.group },
      assigment,
      { upsert: true, new: true }
    );

    res.status(200).json(updatedAssigment);
  } catch (error) {
    next(error);
  }
};

const fetchAllAssigment = async (req, res, next) => {
  try {
    const assigments = await Assigment.find();

    console.log(assigments);
    res.status(200).json(assigments);
  } catch (error) {
    next(error);
  }
};

const fetchAssigment = async (req, res, next) => {
  const { id } = req.params;

  try {
    const assigment = await Assigment.findOne(
      {
        key: id,
      },
      { _id: 0 }
    );

    let tasks = [];

    for (let task of assigment.taskRef) {
      const taskData = await Task.findOne(
        { _id: task },
        { task: 1, description: 1, key: 1, lang: 1 }
      );
      tasks.push(taskData);
    }

    const response = { tasks, ...assigment };
    console.log(response);

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const deleteAssigment = async (req, res, next) => {
  const { qid } = req.body;

  console.log(qid);

  try {
    const assigment = await Assigment.findOneAndDelete({ key: qid });

    console.log(assigment);
    if (assigment) {
      res.status(200).json({ message: "Assigment deleted successfully" });
    } else {
      res.status(404).json({ message: "Assigment not found" });
    }
  } catch (error) {
    next(error);
  }
};

export { updateAssigment, fetchAssigment, fetchAllAssigment, deleteAssigment };
