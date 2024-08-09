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
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
