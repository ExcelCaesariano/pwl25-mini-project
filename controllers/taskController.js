const Task = require('../models/taskModel');

exports.getTasks = (req, res, next) => {
  Task.getAll((err, results) => {
    if (err) return next(err);
    res.json(results);
  });
};

exports.getTasksById = (req, res, next) => {
  Task.getById(req.params.id, (err, result) => {
    if (err) return next(err);
    if (result.length === 0) return res.status (404).json({ message: 'Task not found' });
    res.json(result[0]);
  });
},

exports.createTask = (req, res, next) => {
  Task.create(req.body, (err, result) => {
    if (err) return next(err);
    res.status(201).json({ message: 'Task created successfully', id: result.insertId });
  });
};

exports.updateTask = (req, res, next) => {
  Task.update(req.params.id, req.body, (err) => {
    if (err) return next(err);
    res.json({ message: 'Task updated successfully' });
  });
};

exports.deleteTask = (req, res, next) => {
  Task.delete(req.params.id, (err) => {
    if (err) return next(err);
    res.json({ message: 'Task deleted successfully' });
  });
};
    