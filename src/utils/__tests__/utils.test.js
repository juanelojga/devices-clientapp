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

describe('sort by', () => {
  test('it should sort by system name', () => {
    const sortBy = 'system_name';
    const result = utils.sortBy(sortBy, DEVICES.slice(0));
    expect(result[0].system_name).toBe(DEVICES[1].system_name);
    expect(result[1].system_name).toBe(DEVICES[2].system_name);
    expect(result[2].system_name).toBe(DEVICES[0].system_name);
  });

  test('it should sort by type', () => {
    const sortBy = 'type';
    const result = utils.sortBy(sortBy, DEVICES.slice(0));
    expect(result[0].type).toBe(DEVICES[1].type);
    expect(result[1].type).toBe(DEVICES[2].type);
    expect(result[2].type).toBe(DEVICES[0].type);
  });

  test('it should sort by hdd capacity', () => {
    const sortBy = 'hdd_capacity';
    const result = utils.sortBy(sortBy, DEVICES.slice(0));
    expect(result[0].hdd_capacity).toBe(DEVICES[0].hdd_capacity);
    expect(result[1].hdd_capacity).toBe(DEVICES[1].hdd_capacity);
    expect(result[2].hdd_capacity).toBe(DEVICES[2].hdd_capacity);
  });
});
