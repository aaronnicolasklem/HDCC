<<<<<<< HEAD
const http = require('http');
var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = 3000;
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('GET request to the homepage');
  });
  
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
=======
//const hexbin = d3.hexbin();

const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
>>>>>>> 9b3e93c48bfa7e1e170db1875160107108dc92d1
