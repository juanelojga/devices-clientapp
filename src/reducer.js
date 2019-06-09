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
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
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
    default:
      return state;
  }
}
