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