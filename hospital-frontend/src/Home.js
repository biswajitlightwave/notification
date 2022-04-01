import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const history = useNavigate();
  return (
    <div>
      <div className='homebg position-relative'>
        <div className='homecontent'>
          <button
            type='button'
            class='btn btn-primary admin'
            onClick={() => {
              history('/Admin');
            }}
          >
            Admin
          </button>
          <br></br>
          <button
            type='button'
            class='btn btn-primary patient'
            onClick={() => {
              history('/Patient');
            }}
          >
            Patient
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
