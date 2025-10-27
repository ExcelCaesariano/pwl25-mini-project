const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const logger = require('../middleware/logger');
const validate = require('../middleware/validate');

router.use(logger);

router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTasksById);
router.post('/', validate, taskController.createTask);
router.put('/:id', validate, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
