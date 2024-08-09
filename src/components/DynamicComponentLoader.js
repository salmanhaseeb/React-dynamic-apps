import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComponentVersion } from '../slices/appSlice';
import componentConfig from '../config/componentConfig.json';
import RegistrationFormV1 from './RegistrationFormV1';
import RegistrationFormV2 from './RegistrationFormV2';

const DynamicComponentLoader = () => {
  const dispatch = useDispatch();
  const currentComponentVersion = useSelector((state) => state.app.currentComponentVersion);

  useEffect(() => {
    dispatch(setComponentVersion(componentConfig.version));
  }, [dispatch]);

  let ComponentToRender;
  if (currentComponentVersion === 'v1') {
    ComponentToRender = <RegistrationFormV1 />;
  } else {
    ComponentToRender = <RegistrationFormV2 />;
  }

  return <div>{ComponentToRender}</div>;
};

export default DynamicComponentLoader;
