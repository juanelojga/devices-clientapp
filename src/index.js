import React, { useContext, useReducer, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import './index.scss';

import DevicesContext from './context';
import devicesReduces from './reducer';
import Devices from './components/Devices';
import * as serviceWorker from './serviceWorker';

import { API_BASE_URL } from './configs/constants';

const App = () => {
  const initialState = useContext(DevicesContext);
  const [state, dispatch] = useReducer(devicesReduces, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({
          type: 'LOADING',
          payload: true
        });
        const response = await axios.get(`${API_BASE_URL}/devices`);
        dispatch({
          type: 'GET_DEVICES',
          payload: response.data
        });
      } catch {
        dispatch({
          type: 'ERROR',
          payload: "List of devices couldn't be fetched"
        });
      } finally {
        dispatch({
          type: 'LOADING',
          payload: false
        });
      }
    };
    getData();
  }, []);

  return (
    <DevicesContext.Provider value={{ state, dispatch }}>
      <Devices />
    </DevicesContext.Provider>
  );
};

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
