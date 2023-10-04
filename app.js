const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const server = app.listen(process.env.PORT, function() {
    console.log("Listen port", server.address().port)
})

app.get("/", function(req, res) {
    console.log("Root requested");
    res.status(200).sendFile(path.join(__dirname,'public', 'index.html'))
});
app.get("/page1", function(req, res) {
    console.log("page1 requested");
    res.status(200).sendFile(path.join(__dirname,'public', 'page1.html'))
});
app.get("/page2", function(req, res) {
    console.log("page2 requested");
    res.status(200).sendFile(path.join(__dirname,'public', 'page2.html'))
})

app.post('/json', function(req, res){
    console.log("JSON requested");
    res.status(200).json({'firstName':'Tsogtbayar', 'lastName':'Sukhbaatar'})
})