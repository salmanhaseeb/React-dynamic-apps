import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Menu from './components/Menu';
import ViewPanel from './components/ViewPanel';
import DynamicComponentLoader from './components/DynamicComponentLoader';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Menu />
        <ViewPanel />
        <DynamicComponentLoader />
      </div>
    </Provider>
  );
};

export default App;
