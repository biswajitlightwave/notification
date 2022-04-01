import React from 'react';

function Patientbooking() {
  return (
    <div>
      <div className='container-fluid'>
        <h4 className='header mb-5'>Add Booking</h4>
        <div className='row'>
          <div className='col-md-6'>
            <div className='text-center'>
              {' '}
              <button type='submit' className='btn btn-primary w-50 bg-btn'>
                Add Booking
              </button>
            </div>
            <form className='row g-3 mt-4'>
              <div className='col-md-6'>
                <label for='' className='form-label'>
                  First Name
                </label>
                <input type='text' className='form-control' />
              </div>
              <div className='col-md-6'>
                <label for='' className='form-label'>
                  Last Name
                </label>
                <input type='text' className='form-control' />
              </div>
              <div className='col-3'>
                <label for='' className='form-label'>
                  DOB
                </label>
                <input type='date' className='form-control' />
              </div>
              <div className='col-md-3'>
                <label for='inputState' className='form-label'>
                  Gender
                </label>
                <select className='form-select'>
                  <option selected>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className='col-2'>
                <label for='' className='form-label'>
                  Age
                </label>
                <input type='number' className='form-control' />
              </div>
              <div className='col-md-3'>
                <label for='inputState' className='form-label'>
                  Services
                </label>
                <select className='form-select'>
                  <option selected>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className='col-3'>
                <label for='' className='form-label'>
                  Enter date & time
                </label>
                <input type='date' className='form-control' />
              </div>

              <div className='col-md-3'>
                <label for='inputState' className='form-label'>
                  Department
                </label>
                <select className='form-select'>
                  <option selected>Choose...</option>
                </select>
              </div>
              <div className='col-2'>
                <label for='' className='form-label'>
                  Phone
                </label>
                <input type='number' className='form-control' />
              </div>
              <div className='col-4'>
                <label for='' className='form-label'>
                  Email
                </label>
                <input type='email' className='form-control' />
              </div>
              <div className='col-6'>
                <label for='' className='form-label'>
                  Please type what you want
                </label>
                <input type='email' className='form-control' />
              </div>
              <div className='col-12 text-center mt-5'>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-6'>
            <div className='text-center'>
              {' '}
              <button type='submit' className='btn btn-primary w-50 bg-btn'>
                Add New Booking
              </button>
            </div>

            <form className='row g-3 mt-4'>
              <div className='col-md-6'>
                <label for='' className='form-label'>
                  First Name
                </label>
                <input type='text' className='form-control' />
              </div>
              <div className='col-md-6'>
                <label for='' className='form-label'>
                  Last Name
                </label>
                <input type='text' className='form-control' />
              </div>
              <div className='col-3'>
                <label for='' className='form-label'>
                  DOB
                </label>
                <input type='date' className='form-control' />
              </div>
              <div className='col-md-3'>
                <label for='inputState' className='form-label'>
                  Gender
                </label>
                <select className='form-select'>
                  <option selected>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className='col-2'>
                <label for='' className='form-label'>
                  Age
                </label>
                <input type='number' className='form-control' />
              </div>
              <div className='col-md-3'>
                <label for='inputState' className='form-label'>
                  Services
                </label>
                <select className='form-select'>
                  <option selected>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className='col-3'>
                <label for='' className='form-label'>
                  Enter date & time
                </label>
                <input type='date' className='form-control' />
              </div>

              <div className='col-md-3'>
                <label for='inputState' className='form-label'>
                  Department
                </label>
                <select className='form-select'>
                  <option selected>Choose...</option>
                </select>
              </div>
              <div className='col-2'>
                <label for='' className='form-label'>
                  Phone
                </label>
                <input type='number' className='form-control' />
              </div>
              <div className='col-4'>
                <label for='' className='form-label'>
                  Email
                </label>
                <input type='email' className='form-control' />
              </div>
              <div className='col-6'>
                <label for='' className='form-label'>
                  Please type what you want
                </label>
                <input type='email' className='form-control' />
              </div>
              <div className='col-12 text-center mt-5'>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patientbooking;
