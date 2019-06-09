import React, { useContext, useReducer, useEffect } from 'react';
import { render } from 'react-dom';

import './index.scss';

import DevicesContext from './context';
import devicesReduces from './reducer';
import useGetDevices from './hooks/useGetDevices';
import Devices from './components/Devices';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const initialState = useContext(DevicesContext);
  const [state, dispatch] = useReducer(devicesReduces, initialState);
  const savedDevices = useGetDevices();

  useEffect(() => {
    dispatch({
      type: 'GET_DEVICES',
      payload: savedDevices
    });
  }, [savedDevices]);

  return (
    <DevicesContext.Provider value={{ state, dispatch }}>
      <Devices />
    </DevicesContext.Provider>
  );
};

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
