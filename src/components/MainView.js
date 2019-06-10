import React, { useContext, useState, useEffect } from 'react';
import startCase from 'lodash/startCase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import DevicesContext from '../context';
import Filter from './Filter';
import RemoveDeviceModal from './RemoveDeviceModal';
import CreateDeviceModal from './CreateDeviceModal';
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
  const [showCreateModal, setShowCreateModal] = useState({
    isEdit: false,
    show: false
  });

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
      await axios.delete(`${API_BASE_URL}/devices/${state.selectedDevice.id}`);
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

  const handleCreateDevice = async values => {
    try {
      dispatch({
        type: 'LOADING_DEVICE',
        payload: true
      });

      if (!showCreateModal.isEdit) {
        const response = await axios.post(`${API_BASE_URL}/devices`, values);
        dispatch({
          type: 'ADD_DEVICE',
          payload: response.data
        });
        toast.success('Device was created successfully!');
      } else {
        await axios.put(
          `${API_BASE_URL}/devices/${state.selectedDevice.id}`,
          values
        );
        dispatch({
          type: 'EDIT_DEVICE',
          payload: { ...values, id: state.selectedDevice.id }
        });
        toast.success('Device was edited successfully!');
      }
    } catch {
      dispatch({
        type: 'ERROR',
        payload: "Device couldn't be created."
      });
    } finally {
      dispatch({
        type: 'LOADING_DEVICE',
        payload: false
      });
      setShowCreateModal(false);
    }
    if (filterBy !== DEVICE_TYPES[0]) {
      setFilterBy(DEVICE_TYPES[0]);
    } else {
      dispatch({
        type: 'FILTER_DEVICES',
        payload: filterBy
      });
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
        <button
          onClick={() => {
            dispatch({
              type: 'SET_SELECTED_DEVICE',
              payload: {}
            });
            setShowCreateModal({ isEdit: false, show: true });
          }}
        >
          Create Device
        </button>
      </div>
      <Devices
        loading={state.loadingDevices}
        devices={state.devicesToShow}
        handleRemoveDevice={device => {
          dispatch({
            type: 'SET_SELECTED_DEVICE',
            payload: device
          });
          setShowRemoveModal(true);
        }}
        handleEditDevice={device => {
          dispatch({
            type: 'SET_SELECTED_DEVICE',
            payload: device
          });
          setShowCreateModal({ isEdit: true, show: true });
        }}
      />
      <ToastContainer />
      {showRemoveModal ? (
        <RemoveDeviceModal
          handleClose={() => setShowRemoveModal(false)}
          handleRemove={removeDevice}
          loading={state.loadingDevice}
        />
      ) : null}
      {showCreateModal.show ? (
        <CreateDeviceModal
          show={showCreateModal}
          handleClose={() => setShowCreateModal(false)}
          handleSubmit={handleCreateDevice}
          loading={state.loadingDevice}
          {...state.selectedDevice}
        />
      ) : null}
    </div>
  );
};

export default DevicesList;
