require("dotenv").config();
const express = require("express");
const path = require("path");
const addOrUpdateDB = require('./db');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.post('/glossary', (req, res) => {
  var definition = req.body;
  addOrUpdateDB.addOrUpdateDB(definition);
})
/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
