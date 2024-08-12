import React from 'react';
import { useSelector } from 'react-redux';
import DynamicComponentLoader from '../components/DynamicComponentLoader';
import SimpleTable from '../components/applicationB/SimpleTable'
import StripedTable from '../components/applicationB/StripedTable';

const ApplicationB = () => {
  const currentComponentVersion = useSelector((state) => state.app.currentComponentVersion);

  let ComponentToRender;
  if (currentComponentVersion === 'V1') {
    ComponentToRender = <SimpleTable />;
  } else {
    ComponentToRender = <StripedTable />;
  }

  return (
    <div>
      <DynamicComponentLoader ComponentToRender={ComponentToRender}/>
    </div>
  );
};

export default ApplicationB;
