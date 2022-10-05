require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.post('/glossary', (req, res) => {
  var definition = req.body;
  db.addOrUpdateDB(definition).then(data => {
    res.send(data);
  })
  .catch(err => console.log(err));
});


app.get('/glossary', (req, res) => {
  db.getUpdated()
  .then(results => res.send(results))
  .catch(err => res.send(404, err));
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
