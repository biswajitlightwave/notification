const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const Patientschema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  dob: {
    type: String,
  },
  gender: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  password: {
    type: String,
  },
  address: {
    type: String,
  },
});

const Patient = mongoose.model('patient-registers', Patientschema);

module.exports = Patient;
