import React from 'react';
import { useDispatch } from 'react-redux';
import { setComponentVersion } from '../slices/appSlice';

const ApplicationA = () => {
  const dispatch = useDispatch();

  const handleSwitchToV2 = () => {
    dispatch(setComponentVersion('v2'));
  };

  return (
    <div>
      <h2>Application A</h2>
      <button onClick={handleSwitchToV2}>Switch to RegistrationForm V2</button>
    </div>
  );
};

export default ApplicationA;
