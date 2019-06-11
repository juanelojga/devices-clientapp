import React from 'react';
import { render, fireEvent, cleanup, getByText } from '@testing-library/react';
import 'jest-dom/extend-expect';

import CreateDeviceForm from '../CreateDeviceForm';

import { DEVICES } from '../../utils/mocks';

afterEach(cleanup);

test('snapshot test empty form', () => {
  const handleClose = jest.fn();
  const handleSubmit = jest.fn();
  const loading = false;
  const systemName = '';
  const type = '';
  const hddCapacity = '';

  const { container } = render(
    <CreateDeviceForm
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      loading={loading}
      system_name={systemName}
      type={type}
      hdd_capacity={hddCapacity}
    />
  );
  expect(container).toMatchSnapshot();
});

test('snapshot test ', () => {
  const handleClose = jest.fn();
  const handleSubmit = jest.fn();
  const loading = false;
  const systemName = DEVICES[0].system_name;
  const type = DEVICES[0].type;
  const hddCapacity = DEVICES[0].hdd_capacity;

  const { container } = render(
    <CreateDeviceForm
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      loading={loading}
      system_name={systemName}
      type={type}
      hdd_capacity={hddCapacity}
    />
  );
  expect(container).toMatchSnapshot();
});

test('not submit values because of validation errors', () => {
  const handleClose = jest.fn();
  const handleSubmit = jest.fn();
  const loading = false;
  const systemName = '';
  const type = '';
  const hddCapacity = '';

  const { getByText } = render(
    <CreateDeviceForm
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      loading={loading}
      system_name={systemName}
      type={type}
      hdd_capacity={hddCapacity}
    />
  );

  fireEvent.click(getByText('Confirm'));
  expect(getByText('Invalid System Name')).toBeTruthy();
  expect(getByText('Invalid Type')).toBeTruthy();
  expect(getByText('Invalid HDD Capacity')).toBeTruthy();
  expect(handleSubmit).not.toHaveBeenCalled();
});

test('submit values', () => {
  const handleClose = jest.fn();
  const handleSubmit = jest.fn();
  const loading = false;
  const systemName = DEVICES[0].system_name;
  const type = DEVICES[0].type;
  const hddCapacity = DEVICES[0].hdd_capacity;

  const { getByText } = render(
    <CreateDeviceForm
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      loading={loading}
      system_name={systemName}
      type={type}
      hdd_capacity={hddCapacity}
    />
  );

  fireEvent.click(getByText('Confirm'));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
