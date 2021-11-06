var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.send('it works');
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Node app is working!');
});