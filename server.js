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