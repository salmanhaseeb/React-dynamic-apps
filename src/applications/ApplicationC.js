import React from 'react';
import { useSelector } from 'react-redux';
import DynamicComponentLoader from '../components/DynamicComponentLoader';
import MaleAvatar from '../components/applicationC/MaleAvatar.js'
import FemaleAvatar from '../components/applicationC/FemaleAvatar.js';

const ApplicationB = () => {
  const currentComponentVersion = useSelector((state) => state.app.currentComponentVersion);

  let ComponentToRender;
  if (currentComponentVersion === 'V1') {
    ComponentToRender = <MaleAvatar />;
  } else {
    ComponentToRender = <FemaleAvatar />;
  }

  return (
    <div>
      <DynamicComponentLoader ComponentToRender={ComponentToRender}/>
    </div>
  );
};

export default ApplicationB;
