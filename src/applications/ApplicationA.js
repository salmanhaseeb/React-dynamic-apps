import React from 'react';
import { useSelector } from 'react-redux';
import DynamicComponentLoader from '../components/DynamicComponentLoader';
import RegistrationFormV1 from '../components/applicationA/RegistrationFormV1';
import RegistrationFormV2 from '../components/applicationA/RegistrationFormV2';

const ApplicationA = () => {
  const currentComponentVersion = useSelector((state) => state.app.currentComponentVersion);

  let ComponentToRender;
  if (currentComponentVersion === 'V1') {
    ComponentToRender = <RegistrationFormV1 />;
  } else {
    ComponentToRender = <RegistrationFormV2 />;
  }

  return (
    <div>
      <DynamicComponentLoader ComponentToRender={ComponentToRender}/>
    </div>
  );
};

export default ApplicationA;
