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
        devicesToShow: sortBy(action.payload, state.devicesToShow.slice(0))
      };
    case 'SET_SELECTED_DEVICE':
      return {
        ...state,
        selectedDevice: action.payload
      };
    case 'REMOVE_DEVICE':
      return {
        ...state,
        devices: state.devices.filter(
          device => device.id !== state.selectedDevice.id
        ),
        selectedDevice: {}
      };
    case 'ADD_DEVICE':
      return {
        ...state,
        devices: [...state.devices, action.payload]
      };
    case 'EDIT_DEVICE':
      return {
        ...state,
        devices: state.devices.map(device =>
          device.id === action.payload.id ? action.payload : device
        )
      };
    default:
      return state;
  }
}
