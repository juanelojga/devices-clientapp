export const filterByType = (filter, values) =>
  values.filter(value => (filter === 'all' ? true : value.type === filter));

export const sortBy = (criteria, values) =>
  values.sort((a, b) => {
    const criteria1 = a[criteria].toUpperCase();
    const criteria2 = b[criteria].toUpperCase();
    return criteria1.localeCompare(criteria2, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  });
