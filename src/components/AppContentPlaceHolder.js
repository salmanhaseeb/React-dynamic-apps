import {  useSelector } from 'react-redux';
import ApplicationA from '../applications/ApplicationA';
import ApplicationB from '../applications/ApplicationB';
import ApplicationC from '../applications/ApplicationC'

const AppContentPlaceHolder = () => {
  const currentApp = useSelector((state) => state.app.currentApp);

  let AppComponent = null;
  switch (currentApp) {
    case 'ApplicationA':
      AppComponent = <ApplicationA />;
      break;
    case 'ApplicationB':
      AppComponent = <ApplicationB />;
      break;
    case 'ApplicationC':
      AppComponent = <ApplicationC />;
      break;
    default:
      AppComponent = null;
  }

  return (
    <>
      <div>{AppComponent}</div>
    </>
  )
};

export default AppContentPlaceHolder;
