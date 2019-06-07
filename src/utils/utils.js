export const filterByType = (filter, values) =>
  values.filter(value => (filter === 'all' ? true : value.type === filter));
