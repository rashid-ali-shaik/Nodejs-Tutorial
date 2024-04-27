const Task = require("../models/Task");
const Tasks = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  /*  try {
    const tasks = await Tasks.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json(error);
  } */

  const tasks = await Tasks.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  /* try {
    const task = await Tasks.create(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json(error);
  } */
  const task = await Tasks.create(req.body);
  res.status(201).json({ success: true, data: task });
});

const getTask = asyncWrapper(async (req, res) => {
  /*   try {
    const { id: taskId } = req.params;
    const task = await Tasks.findOne({ _id: taskId });

    if (!task) {
      return res
        .status(404)
        .json({ msg: `no task found with that id:${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  } */
  const { id: taskId } = req.params;
  const task = await Tasks.findOne({ _id: taskId });

  if (!task) {
    return res
      .status(404)
      .json({ msg: `no task found with that id:${taskId}` });
  }
  res.status(200).json({ task });
});

//update task
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const body = req.body;
  /*   try {
    const task = await Tasks.findByIdAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `no task found with that id:${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  } */
  const task = await Tasks.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `no task found with that id:${taskId}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  /*  try {
    const { id: taskId } = req.params;
    const task = await Tasks.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `no task found with that id:${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  } */
  const { id: taskId } = req.params;
  const task = await Tasks.findOneAndDelete({ _id: taskId });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `no task found with that id:${taskId}` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
