import { DEVICE_TYPES } from '../configs/constants';

export const filterByType = (criteria, values) =>
  values.filter(value =>
    criteria === DEVICE_TYPES[0] ? true : value.type === criteria.toUpperCase()
  );

export const sortBy = (criteria, values) =>
  values.sort((a, b) => {
    const criteria1 = a[criteria].toUpperCase();
    const criteria2 = b[criteria].toUpperCase();
    return criteria1.localeCompare(criteria2, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  });
