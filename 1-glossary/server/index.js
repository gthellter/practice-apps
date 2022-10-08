require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db');
const helpers = require('./helperFunctions');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
//gets page number from URL
app.use((req, res, next) => {
  req.pageNumber = req._parsedUrl.query || 0 ;
  next();
  return;
})


//adding or updating a definition
app.post('/glossary', (req, res) => {
  var definition = req.body;
  db.addOrUpdateDB(definition).then(results => {
    res.send(helpers.getArrayFromPageNumber(req.pageNumber, results));
  })
  .catch(err => console.log('Error posting definition to db: ', err));
});

//deleting a definition
app.post('/delete', (req, res) => {
  db.deleteDoc(req.body).then(data => {
    return db.getUpdated() })
    .then(results => {
      res.send(helpers.getArrayFromPageNumber(req.pageNumber, results));
    }).catch(err => console.log('Error deleting definition: ', err));
  }
)

//get latest definitions
app.get('/glossary', (req, res) => {
  db.getUpdated()
  .then(results => res.send(helpers.getArrayFromPageNumber(req.pageNumber, results)))
  .catch(err => res.send(404, err));
})

//getting searched definitions
app.post('/search', (req, res) => {
  db.getUpdated(req.body.term)
  .then(results => {
    res.send(helpers.getArrayFromPageNumber(req.pageNumber,results))
  })
  .catch(err => console.log('Error Searching', err));
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
