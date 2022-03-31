const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const SpecializationSchema = new Schema({
  specialization: {
    type: String,
  },
});

const Specialization = mongoose.model('add-specializations', SpecializationSchema);

module.exports = Specialization;
