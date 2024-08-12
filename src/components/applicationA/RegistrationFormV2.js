import React from 'react';

const RegistrationFormV2 = () => {
  return (
    <form>
      <h3>Registration Form V2</h3>
      <label className='form-label'>
        Full Name:
        <input className='form-control' type="text" name="fullName" />
      </label>
      <label>
        Email:
        <input className='form-control' type="email" name="email" />
      </label>
      <button className='btn btn-primary' type="submit">Register</button>
    </form>
  );
};

export default RegistrationFormV2;
