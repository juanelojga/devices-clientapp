import React, { useContext, useState, useEffect } from 'react';
import startCase from 'lodash/startCase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SyncLoader } from 'react-spinners';

import DevicesContext from '../context';
import Device from './Device';
import Filter from './Filter';

import './Devices.module.scss';

import { DEVICE_TYPES, SORTING_OPTIONS } from '../configs/constants';

const DevicesList = () => {
  const { state, dispatch } = useContext(DevicesContext);

  const [filterBy, setFilterBy] = useState(DEVICE_TYPES[0]);
  const [sortBy, setSortBy] = useState(SORTING_OPTIONS[0]);

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
      <div>
        {state.loading ? (
          <SyncLoader
            sizeUnit={'px'}
            size={15}
            color={'#123abc'}
            loading={state.loading}
          />
        ) : state.devicesToShow.length ? (
          state.devicesToShow.map(device => (
            <Device
              key={device.id}
              system_name={device.system_name}
              type={device.type}
              hdd_capacity={device.hdd_capacity}
            />
          ))
        ) : (
          <h2>No Results were found.</h2>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default DevicesList;
