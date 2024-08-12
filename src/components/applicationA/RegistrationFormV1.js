import React from 'react';

const RegistrationFormV1 = () => {
  return (
    <form>
      <h3>Registration Form V1</h3>
      <label className="form-label">
        Name:
        <input type="text" name="name" className="form-control" />
      </label>
      <button className='btn btn-primary' type="submit">Submit</button>
    </form>
  );
};

export default RegistrationFormV1;
