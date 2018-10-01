const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const BillsSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    required: true,
  },
  MPP: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Bills = mongoose.model('Bills', BillsSchema);

// Export the Article model
module.exports = Bills;
