'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));

// Instantiate the ExpressJS framework and configure app.use() middleware to interface with the file system to serve static resources.
// Our files are in a "public" directory now because this is the directory we would like ExpressJS to use to serve our local files. ExpressJS serves our local files by using the methods app.get and app.use.
app.use(express.static('public'));


app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.get('/new', (request, response) => {
  response.sendFile(path.join(__dirname + '/public/new.html'));
});

app.use(function (request, response) {
  response.status(404).send('Not Found');
});

app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});
