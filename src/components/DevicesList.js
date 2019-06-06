import React from 'react';
import startCase from 'lodash/startCase';

import './DevicesList.module.scss';

import DeviceView from './DeviceView';
import Filter from './Filter';

import { DEVICE_TYPES, SORTING_OPTIONS } from '../configs/constants';

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
    <DeviceView
      systemName="SUSAN-DESKTOP"
      type="Windows Workstation"
      hddCapacity="1024GB"
    />
    <DeviceView
      systemName="SUSAN-DESKTOP"
      type="Windows Workstation"
      hddCapacity="1024GB"
    />
    <DeviceView
      systemName="SUSAN-DESKTOP"
      type="Windows Workstation"
      hddCapacity="1024GB"
    />
  </div>
);

export default DevicesList;
