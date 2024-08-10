import React from 'react';
import { useSelector } from 'react-redux';
import Menu from './Menu';
import AppContentPlaceHolder from './AppContentPlaceHolder';
import DynamicComponentLoader from './DynamicComponentLoader';

function ViewPanel() {

  const currentApp = useSelector((state) => state.app.currentApp);

  return (
    <>
      <h2 className='text-center'> Application View Panel </h2>
      {
        currentApp && <p> {currentApp} currently active. </p>
      }
      <Menu />
      <AppContentPlaceHolder />
      <DynamicComponentLoader />
    </>
  )
}

export default ViewPanel