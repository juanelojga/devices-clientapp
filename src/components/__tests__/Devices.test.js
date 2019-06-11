import React from 'react';
import { render, fireEvent, cleanup, getByText } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Devices from '../Devices';

import { DEVICES } from '../../utils/mocks';

afterEach(cleanup);

test('snapshot test', () => {
  const handleEditDevice = jest.fn();
  const handleRemoveDevice = jest.fn();
  const loading = false;

  const { container } = render(
    <Devices
      handleEditDevice={handleEditDevice}
      handleRemoveDevice={handleRemoveDevice}
      loading={loading}
      devices={DEVICES}
    />
  );
  expect(container).toMatchSnapshot();
});

test('snapshot test, empty devices', () => {
  const handleEditDevice = jest.fn();
  const handleRemoveDevice = jest.fn();
  const loading = false;

  const { container, getByText } = render(
    <Devices
      handleEditDevice={handleEditDevice}
      handleRemoveDevice={handleRemoveDevice}
      loading={loading}
      devices={[]}
    />
  );
  expect(getByText('No Results were found.')).toBeTruthy();
  expect(container).toMatchSnapshot();
});

test('snapshot test, loading', () => {
  const handleEditDevice = jest.fn();
  const handleRemoveDevice = jest.fn();
  const loading = true;

  const { container } = render(
    <Devices
      handleEditDevice={handleEditDevice}
      handleRemoveDevice={handleRemoveDevice}
      loading={loading}
      devices={[]}
    />
  );
  expect(container).toMatchSnapshot();
});

test('remove device', () => {
  const handleEditDevice = jest.fn();
  const handleRemoveDevice = jest.fn();
  const loading = false;

  const { getByTestId } = render(
    <Devices
      handleEditDevice={handleEditDevice}
      handleRemoveDevice={handleRemoveDevice}
      loading={loading}
      devices={DEVICES}
    />
  );
  fireEvent.click(getByTestId(`remove-${DEVICES[1].id}`));
  expect(handleRemoveDevice).toHaveBeenCalledTimes(1);
  expect(handleRemoveDevice).toHaveBeenCalledWith(DEVICES[1]);
});

test('edit device', () => {
  const handleEditDevice = jest.fn();
  const handleRemoveDevice = jest.fn();
  const loading = false;

  const { getByTestId } = render(
    <Devices
      handleEditDevice={handleEditDevice}
      handleRemoveDevice={handleRemoveDevice}
      loading={loading}
      devices={DEVICES}
    />
  );
  fireEvent.click(getByTestId(`edit-${DEVICES[0].id}`));
  expect(handleEditDevice).toHaveBeenCalledTimes(1);
  expect(handleEditDevice).toHaveBeenCalledWith(DEVICES[0]);
});
