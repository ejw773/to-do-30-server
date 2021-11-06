const express = require('express');
const taskRouter = express.Router();

taskRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all tasks')
})
.post((req, res) => {
    res.end(`Will add task: ${req.body.name}`);
})
.put((req, res) => {
    res.end(`PUT not supported at endpoint /tasks`)
})
.delete((req, res) => {
    res.end(`DELETE not supported at endpoint /tasks`)
})

module.exports = taskRouter;