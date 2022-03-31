const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const BookingSchema = new Schema({
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
  age: {
    type: String,
  },
  service: {
    type: String,
  },
  date: {
    type: String,
  },
  department: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  email_id: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Booking = mongoose.model('booking-patient', BookingSchema);

module.exports = Booking;
