//const hexbin = d3.hexbin();

const express = require('express');
const app = express();
var path = require('path');
const port = 3000;
app.use('/public', express.static('public'));
app.set('view engine', 'ejs')


/*const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`...`);
*/
app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
