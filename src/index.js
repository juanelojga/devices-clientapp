import React, { useContext, useReducer, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import './index.scss';

import DevicesContext from './context';
import devicesReduces from './reducer';
import MainView from './components/MainView';
import * as serviceWorker from './serviceWorker';

import { API_BASE_URL } from './configs/constants';

const App = () => {
  const initialState = useContext(DevicesContext);
  const [state, dispatch] = useReducer(devicesReduces, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({
          type: 'LOADING_DEVICES',
          payload: true
        });
        const response = await axios.get(`${API_BASE_URL}/devices`);
        dispatch({
          type: 'GET_DEVICES',
          payload: response.data
        });
      } catch {
        const message = "List of devices couldn't be fetched";
        toast.error(message);
        dispatch({
          type: 'ERROR',
          payload: message
        });
      } finally {
        dispatch({
          type: 'LOADING_DEVICES',
          payload: false
        });
      }
    };
    getData();
  }, []);

  return (
    <DevicesContext.Provider value={{ state, dispatch }}>
      <MainView />
      <ToastContainer />
    </DevicesContext.Provider>
  );
};

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
