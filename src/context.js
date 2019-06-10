import React from 'react';

import { SORTING_OPTIONS } from './configs/constants';

const DevicesContext = React.createContext({
  devices: [],
  sortCriteria: SORTING_OPTIONS[0],
  devicesToShow: [],
  loadingDevices: false,
  loadingDevice: false,
  error: null,
  selectedDevice: {}
});

export default DevicesContext;
