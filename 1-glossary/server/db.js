const mongoose = require("mongoose");
const glossSchema = new mongoose.Schema({
  term: String,
  definition: String
})

mongoose.connect('mongodb://localhost');
const model = mongoose.model('gloss', glossSchema);

const addOrUpdateDB = (def) => {
  var conditions = {'term': def.term}


  return new Promise((resolve, reject) => {
    model.findOneAndUpdate(conditions, def, {upsert: true, new: true})
    .then((doc) => {
      model.find().exec().then(data => {
        console.log(data);
        resolve(data) })
     })
    .catch(err => reject(err) );
  })
  console.log(def);
}
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
exports.addOrUpdateDB =  addOrUpdateDB;