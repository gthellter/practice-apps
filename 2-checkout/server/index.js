require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const controller = require('./Controllers.js');

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);
app.use(express.json());

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//post request '/page1'
app.post('/userData', (req, res) => {
  console.log(req.body);
  //check auth key, if matches
  var name = req.body.userPage1.name;
  var sessionId = req.session_id;
  controller.authenticateUser(name, sessionId).then(results => {
    if (results === name) {
      console.log('done!!!!!!');
    } else {
      controller.saveUserData(req.body).then(() => {
        return db.queryAsync(
          `INSERT INTO authentication(name, auth_key) values('${name}', '${sessionId}')`
          )
        }).then(results => console.log(results)).catch(err => console.log(err));
    }
  })
    });

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
