import React from 'react';

const RegistrationFormV2 = () => {
  return (
    <form>
      <h3>Registration Form V2</h3>
      <label>
        Full Name:
        <input type="text" name="fullName" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationFormV2;
