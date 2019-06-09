import { toast } from 'react-toastify';

import { filterByType, sortBy } from './utils/utils';

export default function reducer(state, action) {
  switch (action.type) {
    case 'GET_DEVICES':
      return {
        ...state,
        devices: action.payload,
        devicesToShow: sortBy(state.sortCriteria, action.payload)
      };
    case 'LOADING_DEVICES':
      return {
        ...state,
        loadingDevices: action.payload
      };
    case 'LOADING_DEVICE':
      return {
        ...state,
        loadingDevice: action.payload
      };
    case 'ERROR':
      toast.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case 'FILTER_DEVICES':
      const devicesToShow = filterByType(action.payload, state.devices);
      return {
        ...state,
        devicesToShow: sortBy(state.sortCriteria, devicesToShow)
      };
    case 'SORT_DEVICES':
      return {
        ...state,
        sortCriteria: action.payload,
        devicesToShow: sortBy(action.payload, state.devicesToShow)
      };
    case 'SET_SELECTED_DEVICE_ID':
      return {
        ...state,
        selectedDeviceId: action.payload
      };
    case 'REMOVE_DEVICE':
      return {
        ...state,
        devices: state.devices.filter(
          device => device.id !== state.selectedDeviceId
        ),
        selectedDeviceId: null
      };
    default:
      return state;
  }
}
