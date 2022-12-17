//const hexbin = d3.hexbin();

const express = require('express');
const app = express();
const mysql= require('mysql');
var path = require('path');
const port = 3000;
/*
var connection = mysql.createConnection({
  host: '',
  user:'',
  password:'',
  database:''
  });
app.use('/public', express.static('public'));
app.set('view engine', 'ejs')

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

connection.end();
*/
app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

