import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setComponentVersion } from '../slices/appSlice';
import componentConfig from '../config/componentConfig.json';

const DynamicComponentLoader = ({ComponentToRender}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setComponentVersion(componentConfig.version));
  }, [dispatch]);


  return <div>{ComponentToRender}</div>;
};

export default DynamicComponentLoader;
