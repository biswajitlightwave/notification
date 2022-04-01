const express = require('express');
const router = express.Router();
const Specialization = require('../models/specialization');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const Booking = require('../models/booking');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Add Specialization
router.post('/specializations', async (req, res) => {
  const special = new Specialization(req.body);
  await special.save();
  try {
    res.status(200).json({
      Status: res.statusCode,
    });
  } catch {
    res.status(500).json({
      Status: res.statusCode,
    });
  }
});
// Add Specialization

// Login Patient
router.post('/login', async (req, res) => {
  var phone_number = req.body.phone_number;
  var password = req.body.password;

  Patient.findOne({ phone_number: phone_number }).then((patient) => {
    if (patient) {
      bcrypt.compare(password, patient.password, function (err, result) {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ name: patient.name }, 'verySecretValue', {
            expiresIn: '1h',
          });
          res.json({
            message: 'Login Successful',
            token,
          });
        } else {
          res.json({
            message: 'password doesnot matched',
          });
        }
      });
    } else {
      res.json({
        message: 'No user found!',
      });
    }
  });
});
// Login Patient

// Adding Doctors to database
router.post('/doctors', async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  try {
    res.status(200).json({
      Status: res.statusCode,
    });
  } catch {
    res.status(500).json({
      Status: res.statusCode,
    });
  }
});
// router.post('/doctors', function (req, res, next) {
//   Doctor.create(req.body)
//     .then(function (doctor) {
//       res.send(doctor);
//     })
//     .catch(next);
// });
// Adding Doctors to database

// Adding Patients to database
router.post('/patients', function (req, res, next) {
  bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
    if (err) {
      res.json({
        error: err,
      });
    }
    const patient = new Patient({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dob: req.body.dob,
      gender: req.body.gender,
      phone_number: req.body.phone_number,
      password: hashedPassword,
      address: req.body.address,
    });
    patient
      .save()
      try {
        res.status(200).json({
          Status: res.statusCode,
        });
      } catch {
        res.status(500).json({
          Status: res.statusCode,
        });
      }
      // .then((patient) => {
      //   res.json({
      //     message: 'Patient added successfully',
      //   });
      // })
      // .catch((error) => {
      //   res.json({
      //     message: 'An error occurred!',
      //   });
      // });
  });
});
// Adding Patients to database

// Adding booking patients to database
router.post('/bookings', function (req, res, next) {
  Booking.create(req.body)
    .then(function (booking) {
      res.send(booking);
    })
    .catch(next);
});
// Adding booking patients to database

module.exports = router;

// router.post('/login', async (req, res) => {
//   if (req.body.phone_number && req.body.password) {
//     let user = await Patient.findOne(req.body).select('-password');
//     if (user) {
//       res.send(user);
//     } else {
//       res.send({ result: 'Invalid Phone Number or Password' });
//     }
//   } else {
//     res.send({ result: 'All fields are required' });
//   }
// });

// router.post('/patients', function (req, res, next) {
//   Patient.create(req.body)
//     .then(function (patient) {
//       res.send(patient);
//     })
//     .catch(next);
// });

// router.post('/register', AuthController.register);
// router.post('/login', AuthController.login);
