import React from 'react';
import { useSelector } from 'react-redux';
import Menu from './Menu';
import AppContentPlaceHolder from './AppContentPlaceHolder';

function ViewPanel() {

  const currentApp = useSelector((state) => state.app.currentApp);

  return (
    <>
      <h2 className='text-center'> Application View Panel </h2>
        <p className='text-center'> {currentApp ? `${currentApp} currently active` : 'Showing default menu. Please select an app to view its components' }  </p>
      <Menu />
      <AppContentPlaceHolder />
    </>
  )
}

export default ViewPanel