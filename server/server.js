const express = require('express');
const path = require("path")
var app = express();
const port = 3000;

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});