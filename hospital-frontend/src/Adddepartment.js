import React, { useState } from 'react';
import axios from 'axios';

function Adddepartment() {
  const [deptname, setDeptName] = useState();
  const handleChange = (e) => {
    var deptname = e.target.value;
    setDeptName(deptname);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log('deptname', deptname);
    const value = {
      specialization: deptname,
    };

    axios
      .post('http://localhost:4000/api/specializations', value)
      .then((response) => {
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
        <h4 className='header'>Add Departament</h4>
        <form className='row mt-4 justify-content-center'>
          <div className='col-md-3'>
            <label className='form-label'>Departament Name</label>
            <input
              type='text'
              className='form-control'
              onChange={handleChange}
            />
          </div>
          <div className='col-12 text-center mt-5'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adddepartment;
