import React from 'react';

function Login() {
  return (
    <div>
      <div className='container'>
        <h4 className='header'>Login</h4>
        <div className='row'>
          <div className='row mt-4'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <label for='' className='form-label'>
                Mobile Number
              </label>
              <input type='number' className='form-control' />
            </div>
            <div className='col-md-4'></div>
          </div>
          <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <label for='' className='form-label'>
                Password
              </label>
              <input type='password' className='form-control' />
            </div>
            <div className='col-md-4'></div>
          </div>
        </div>

        <div className='col-12 text-center mt-5'>
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
