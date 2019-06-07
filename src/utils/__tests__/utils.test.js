import * as utils from '../utils';

import { DEVICES } from './mocks';

describe('filter by', () => {
  test('it should show all devices', () => {
    const filterBy = 'all';
    const result = utils.filterByType(filterBy, DEVICES);
    expect(result).toEqual(DEVICES);
  });

  test('it should show mac devices', () => {
    const filterBy = 'mac';
    const result = utils.filterByType(filterBy, DEVICES);
    expect(result).toEqual([DEVICES[1]]);
  });

  test('it should show windows_server devices', () => {
    const filterBy = 'windows_server';
    const result = utils.filterByType(filterBy, DEVICES);
    expect(result).toEqual([DEVICES[2]]);
  });
});
