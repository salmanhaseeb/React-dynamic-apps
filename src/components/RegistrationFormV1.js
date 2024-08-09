import React from 'react';

const RegistrationFormV1 = () => {
  return (
    <form>
      <h3>Registration Form V1</h3>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationFormV1;
