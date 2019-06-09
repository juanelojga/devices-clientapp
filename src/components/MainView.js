import React, { useContext, useState, useEffect } from 'react';
import startCase from 'lodash/startCase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import DevicesContext from '../context';
import Filter from './Filter';
import RemoveDeviceModal from './RemoveDeviceModal';
import Devices from './Devices';

import './Devices.module.scss';

import {
  DEVICE_TYPES,
  SORTING_OPTIONS,
  API_BASE_URL
} from '../configs/constants';

const DevicesList = () => {
  const { state, dispatch } = useContext(DevicesContext);

  const [filterBy, setFilterBy] = useState(DEVICE_TYPES[0]);
  const [sortBy, setSortBy] = useState(SORTING_OPTIONS[0]);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'FILTER_DEVICES',
      payload: filterBy
    });
  }, [dispatch, filterBy]);

  useEffect(() => {
    dispatch({
      type: 'SORT_DEVICES',
      payload: sortBy
    });
  }, [dispatch, sortBy]);

  const removeDevice = async () => {
    try {
      dispatch({
        type: 'LOADING_DEVICE',
        payload: true
      });
      await axios.delete(`${API_BASE_URL}/devices/${state.selectedDeviceId}`);
      dispatch({
        type: 'REMOVE_DEVICE'
      });
      dispatch({
        type: 'FILTER_DEVICES',
        payload: filterBy
      });
    } catch {
      dispatch({
        type: 'ERROR',
        payload: "Device couldn't be removed"
      });
    } finally {
      dispatch({
        type: 'LOADING_DEVICE',
        payload: false
      });
      setShowRemoveModal(false);
    }
  };

  return (
    <div>
      <div>
        <Filter
          title="Device Type"
          options={DEVICE_TYPES.map(type => ({
            id: type,
            name: startCase(type)
          }))}
          value={filterBy}
          handleChange={e => setFilterBy(e.target.value)}
        />
        <Filter
          title="Sort By"
          options={SORTING_OPTIONS.map(option => ({
            id: option,
            name: startCase(option)
          }))}
          value={sortBy}
          handleChange={e => setSortBy(e.target.value)}
        />
      </div>
      <Devices
        loading={state.loadingDevices}
        devices={state.devicesToShow}
        handleRemoveDevice={deviceId => {
          dispatch({
            type: 'SET_SELECTED_DEVICE_ID',
            payload: deviceId
          });
          setShowRemoveModal(true);
        }}
      />
      <ToastContainer />
      <RemoveDeviceModal
        show={showRemoveModal}
        handleClose={() => setShowRemoveModal(false)}
        handleRemove={removeDevice}
        loading={state.loadingDevice}
      />
    </div>
  );
};

export default DevicesList;
