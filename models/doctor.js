const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const DoctorSchema = new Schema({
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
  speciality: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  email_id: {
    type: String,
  },
  doj: {
    type: String,
  },
});

const Doctor = mongoose.model('add-doctors', DoctorSchema);

module.exports = Doctor;
