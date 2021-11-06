const express = require('express');
const taskRouter = require('./routes/taskRouter');

const app = express();
app.use(express.json());

app.use('/tasks', taskRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Server for To-Do 30</h1></body></html>')
})

app.listen(process.env.PORT || 4000, function () {
    console.log('Server running');
});