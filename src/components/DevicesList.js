import React from 'react';
import startCase from 'lodash/startCase';

import './DevicesList.module.scss';

import DeviceView from './DeviceView';
import Filter from './Filter';

import { DEVICE_TYPES, SORTING_OPTIONS } from '../configs/constants';

const DEVICES = [
  {
    id: '1',
    system_name: 'SUSAN-DESKTOP',
    type: 'windows_workstation',
    hdd_capacity: '128 GB'
  },
  {
    id: '2',
    system_name: 'MAC-LOCAL-FREDDY',
    type: 'mac',
    hdd_capacity: '256 GB'
  },
  {
    id: '3',
    system_name: 'SMART-SERVER',
    type: 'windows_server',
    hdd_capacity: '1024 GB'
  }
];

const DevicesList = () => (
  <div>
    <Filter
      title="Device Type"
      values={DEVICE_TYPES.map(type => ({ id: type, name: startCase(type) }))}
    />

    <Filter
      title="Sort By"
      values={SORTING_OPTIONS.map(option => ({
        id: option,
        name: startCase(option)
      }))}
    />
    {DEVICES.map(device => (
      <DeviceView
        key={device.id}
        system_name={device.system_name}
        type={device.type}
        hdd_capacity={device.hdd_capacity}
      />
    ))}
  </div>
);

export default DevicesList;
