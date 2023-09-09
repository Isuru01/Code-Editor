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
    const assigment = await Assigment.findOne({
      key: id,
    });

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

export { updateAssigment, fetchAssigment, fetchAllAssigment };
