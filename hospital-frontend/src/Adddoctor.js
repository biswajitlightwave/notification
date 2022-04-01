import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Adddoctor() {
  const [dept, setSpecialization] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4004/quotes').then((response) => {
      // console.log(response.data);
      var data = response.data;
      var specialization = [];
      for (let i = 0; i < data.length; i++) {
        var dept = response.data[i].specialization;
        specialization.push(dept);
      }
      setSpecialization(specialization);
    });
  }, []);

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    gender: '',
    speciality: '',
    phone_number: '',
    email_id: '',
    doj: '',
  });
  function handle(e) {
    const newdata = { ...state };
    newdata[e.target.id] = e.target.value;
    setState(newdata);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('state', state);

    axios.post('http://localhost:4000/api/doctors', state).then((response) => {
      if (response.data.Status == 200) {
        alert('Submit Successfully');
        window.location.reload();
      } else if (response.data.Status == 500) {
        alert('Submit Error');
      } else {
        alert('something went wrong');
      }
    });
  };

  return (
    <div>
      <div className='container'>
        <h4 className='header'>Add Doctors</h4>
        <form className='row g-3 mt-4'>
          <div className='col-md-3'>
            <label className='form-label'>First Name</label>
            <input
              type='text'
              className='form-control'
              name='first_name'
              onChange={(e) => handle(e)}
              id='first_name'
              value={state.first_name}
            />
          </div>
          <div className='col-md-3'>
            <label className='form-label'>Last Name</label>
            <input
              type='text'
              className='form-control'
              name='last_name'
              onChange={(e) => handle(e)}
              id='last_name'
              value={state.last_name}
            />
          </div>
          <div className='col-3'>
            <label className='form-label'>DOB</label>
            <input
              type='date'
              className='form-control'
              name='dob'
              onChange={(e) => handle(e)}
              id='dob'
              value={state.dob}
            />
          </div>
          <div className='col-md-2'>
            <label className='form-label'>Gender</label>
            <select
              className='form-select'
              name='gender'
              onChange={(e) => handle(e)}
              id='gender'
              value={state.gender}
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className='col-md-3'>
            <label className='form-label'>Speciality</label>
            <select
              className='form-select'
              name='speciality'
              onChange={(e) => handle(e)}
              id='speciality'
              value={state.speciality}
            >
              <option>Choose...</option>
              {dept.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div className='col-2'>
            <label className='form-label'>Phone</label>
            <input
              type='number'
              className='form-control'
              name='phone_number'
              onChange={(e) => handle(e)}
              id='phone_number'
              value={state.phone_number}
            />
          </div>
          <div className='col-4'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              className='form-control'
              name='email_id'
              onChange={(e) => handle(e)}
              id='email_id'
              value={state.email_id}
            />
          </div>
          <div className='col-3'>
            <label className='form-label'>DOJ</label>
            <input
              type='date'
              className='form-control'
              name='doj'
              onChange={(e) => handle(e)}
              id='doj'
              value={state.doj}
            />
          </div>
          <div className='col-12 text-center mt-5'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adddoctor;
