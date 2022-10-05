const mongoose = require("mongoose");


//set up MongoDb and connect
const glossSchema = new mongoose.Schema({
  term: String,
  definition: String
})
mongoose.connect('mongodb://localhost');
const model = mongoose.model('gloss', glossSchema);


//adds or edits document
const addOrUpdateDB = (def) => {
  var conditions = {'term': def.term};

  return new Promise((resolve, reject) => {
    model.findOneAndUpdate(conditions, def, {upsert: true, new: true})
    .then((doc) => {
      model.find().exec().then(data => {
        resolve(data) })
     })
    .catch(err => reject(err) );
  })
};


//deletes document
const deleteDoc = (def) => {
  return model.deleteOne({ 'term': def.term });
}

const getUpdated = () => {
  return model.find().exec();
}

module.exports = {
  addOrUpdateDB,
  deleteDoc,
  getUpdated
};
