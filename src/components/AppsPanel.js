import { useDispatch } from 'react-redux';
import { loadApp, setMenuItems, setAppComponents } from '../slices/appSlice';
import appConfig from '../config/appConfig.json';
import { useState } from 'react';

function AppsPanel() {
  
  const [activeIndex, setActiveIndex] = useState(null);
  const dispatch = useDispatch();

  function handleSwitchApplication(index) {
    setActiveIndex(index);
    dispatch(loadApp(appConfig[index].app));
    dispatch(setMenuItems(appConfig[index].menuItems));
    dispatch(setAppComponents(appConfig[index].components))
  }

  return (
    <div>
      <h2 className='text-center mb-3'>Applications</h2>
      <ul className='list-unstyled'>
        {appConfig.map((element, index) => (
          <li key={index} className='mb-3 text-center'>
            <button className={activeIndex === index ? 'btn btn-primary active' : 'btn btn-primary'} onClick={() => handleSwitchApplication(index)}>{element.app}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppsPanel