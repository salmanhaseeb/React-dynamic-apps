import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AppsPanel from './components/AppsPanel';
import ViewPanel from './components/ViewPanel';
import AppComponentPanel from './components/AppComponentPanel';

const App = () => {
  return (
    <Provider store={store}>
      <h1 className='text-center mt-5'> Enterprise Core Test </h1>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-sm-3 border'>
            <AppsPanel />
          </div>
          <div className='col-sm-4 border'>
            <AppComponentPanel />
          </div>
          <div className='col-sm-5 border'>
            <ViewPanel />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
