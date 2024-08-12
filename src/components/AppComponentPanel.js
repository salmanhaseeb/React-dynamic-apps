import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { setComponentVersion } from '../slices/appSlice';

function AppComponentPanel() {
  const [activeIndex, setActiveIndex] = useState(null);

  const currentApp = useSelector((state) => state.app.currentApp);
  const currentAppComponents = useSelector((state) => state.app.currentAppComponents);
  const dispatch = useDispatch();

  function handleSwitchComponent(index) {
    setActiveIndex(index);
    dispatch(setComponentVersion(currentAppComponents[index].version))
  }

  return (
    <>
      <h2 className='text-center'> Components </h2>
      <p className='text-center'> { currentApp ? `Showing components for ${currentApp}` : 'Please select an application' } </p>

      <ul className='list-unstyled'>
        {
          currentAppComponents && currentAppComponents.map((component, index) => (
            <li key={index} className='mb-3 text-center'>
              <button className={activeIndex === index ? 'btn btn-primary active' : 'btn btn-primary'} onClick={() => handleSwitchComponent(index)}>{`${component.name} ${component.version}`}</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default AppComponentPanel;