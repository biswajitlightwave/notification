import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Patientregister() {
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    phone_number: '',
    password: '',
    address: '',
  });
  function handle(e) {
    const newdata = { ...state };
    newdata[e.target.id] = e.target.value;
    setState(newdata);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log('state', state);

    axios.post('http://localhost:4000/api/patients', state).then((response) => {
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
        <h4 className='header'>Patient Register</h4>
        <form className='row g-3 mt-4'>
          <div className='col-md-3'>
            <label for='' className='form-label'>
              First Name
            </label>
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
            <label for='' className='form-label'>
              Last Name
            </label>
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
            <label for='' className='form-label'>
              DOB
            </label>
            <input
              type='date'
              className='form-control'
              name='dob'
              onChange={(e) => handle(e)}
              id='dob'
              value={state.dob}
            />
          </div>

          <div className='col-2'>
            <label for='' className='form-label'>
              Mobile Number
            </label>
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
            <label for='' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              name='password'
              onChange={(e) => handle(e)}
              id='password'
              value={state.password}
            />
          </div>
          <div className='col-4'>
            <label for='' className='form-label'>
              Address
            </label>
            <input
              type='text'
              className='form-control'
              name='address'
              onChange={(e) => handle(e)}
              id='address'
              value={state.address}
            />
          </div>

          <div className='col-12 text-center mt-5'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Patientregister;
