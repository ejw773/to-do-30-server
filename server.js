var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.send('it works');
});

app.get('/hello', function (req, res) {
    res.send('hello there')
})

app.listen(process.env.PORT || 4000, function () {
    console.log('Node app is working!');
});