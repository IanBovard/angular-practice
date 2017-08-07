/* jshint esversion:6*/

const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});