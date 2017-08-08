/* jshint esversion:6*/

const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));

app.get('/api/movies', (req, res) => {
  let movies = [
    { title: 'Star Wars' },
    { title: 'Dark Tower' },
    { title: 'Star Trek' },
    { title: 'Guyver' }
  ];

  return res.json(movies);
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});