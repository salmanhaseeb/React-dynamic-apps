import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuItems } from '../slices/appSlice';
import menuConfig from '../config/menuConfig.json';

const Menu = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.app.menuItems);

  useEffect(() => {
    dispatch(setMenuItems(menuConfig.menuItems));
  }, [dispatch]);

  return (
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <div className='container-fluid'>
        <ul class="navbar-nav">
          {menuItems.map((item, index) => (
            <li class="nav-item" key={index}>
              <a className="nav-link" href="#">
                { item }
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
