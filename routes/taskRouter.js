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

module.exports = taskRouter;