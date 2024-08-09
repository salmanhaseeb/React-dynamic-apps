import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadApp, setMenuItems } from '../slices/appSlice';
import appConfig from '../config/appConfig.json';
import ApplicationA from '../applications/ApplicationA';
import ApplicationB from '../applications/ApplicationB';

const ViewPanel = () => {
  const dispatch = useDispatch();
  const currentApp = useSelector((state) => state.app.currentApp);

  useEffect(() => {
    dispatch(loadApp(appConfig.app));
    dispatch(setMenuItems(appConfig.menuItems));
  }, [dispatch]);

  let AppComponent = null;
  switch (currentApp) {
    case 'ApplicationA':
      AppComponent = <ApplicationA />;
      break;
    case 'ApplicationB':
      AppComponent = <ApplicationB />;
      break;
    default:
      AppComponent = null;
  }

  return <div>{AppComponent}</div>;
};

export default ViewPanel;
