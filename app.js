const express = require('express')
const app = express() 
const port = 3000 

// this registers the public folder for express 
app.use(express.static(__dirname + '/public')) 

app.get('/', function (req, res) {
    // __dirname__ is provided by NodeJS 
    console.log(__dirname) 
    res.sendFile(__dirname + '/views/home.html') 
}) 

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html') 
}) 

app.get('/projects', function (req, res) {
    res.sendFile(__dirname + '/views/projects.html')
}) 

app.listen(port, function () { 
	console.log('Server listening on port ${port}')
})