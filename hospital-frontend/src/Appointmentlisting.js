import React from 'react';

function Appointmentlisting() {
  return (
    <div>
      <div className='container'>
        <h4 className='header'>Appointment Listing</h4>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>slno</th>
              <th scope='col'>Name</th>
              <th scope='col'>Dob</th>
              <th scope='col'>Gender</th>
              <th scope='col'>Age</th>
              <th scope='col'>Service</th>
              <th scope='col'>Date & Time</th>
              <th scope='col'>Department</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Shaswati Senapati</td>
              <td>22.12.1997</td>
              <td>Female</td>
              <td>25</td>
              <td>Other</td>
              <td>28-03-2022 02:34 PM</td>
              <td>Cardiologist</td>
              <td>9090876765</td>
              <td>dummy text</td>
              <td>
                {' '}
                <button
                  type='submit'
                  className='btn btn-primary accept bg-success'
                >
                  Accept
                </button>
                <button
                  type='submit'
                  className='btn btn-primary reject bg-danger'
                >
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Shaswati Senapati</td>
              <td>22.12.1997</td>
              <td>Female</td>
              <td>25</td>
              <td>Other</td>
              <td>28-03-2022 02:34 PM</td>
              <td>Cardiologist</td>
              <td>9090876765</td>
              <td>dummy text</td>
              <td>
                {' '}
                <button
                  type='submit'
                  className='btn btn-primary accept bg-success'
                >
                  Accept
                </button>
                <button
                  type='submit'
                  className='btn btn-primary reject bg-danger'
                >
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointmentlisting;
