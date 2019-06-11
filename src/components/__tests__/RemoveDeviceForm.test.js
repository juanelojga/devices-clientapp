import React from 'react';
import { render, fireEvent, cleanup, getByText } from '@testing-library/react';
import 'jest-dom/extend-expect';

import RemoveDeviceForm from '../RemoveDeviceForm';

afterEach(cleanup);

test('snapshot test', () => {
  const handleClose = jest.fn();
  const handleRemove = jest.fn();
  const loading = false;

  const { container } = render(
    <RemoveDeviceForm
      handleClose={handleClose}
      handleRemove={handleRemove}
      loading={loading}
    />
  );
  expect(container).toMatchSnapshot();
});

test('snapshot test loading', () => {
  const handleClose = jest.fn();
  const handleRemove = jest.fn();
  const loading = true;

  const { container } = render(
    <RemoveDeviceForm
      handleClose={handleClose}
      handleRemove={handleRemove}
      loading={loading}
    />
  );
  expect(container).toMatchSnapshot();
});

test('close modal', () => {
  const handleClose = jest.fn();
  const handleRemove = jest.fn();
  const loading = false;

  const { getByText } = render(
    <RemoveDeviceForm
      handleClose={handleClose}
      handleRemove={handleRemove}
      loading={loading}
    />
  );
  fireEvent.click(getByText('No'));
  expect(handleClose).toHaveBeenCalledTimes(1);
  expect(handleRemove).not.toHaveBeenCalled();
});

test('remove device', () => {
  const handleClose = jest.fn();
  const handleRemove = jest.fn();
  const loading = false;

  const { getByText } = render(
    <RemoveDeviceForm
      handleClose={handleClose}
      handleRemove={handleRemove}
      loading={loading}
    />
  );
  fireEvent.click(getByText('Yes'));
  expect(handleRemove).toHaveBeenCalledTimes(1);
  expect(handleClose).not.toHaveBeenCalled();
});

test('disable button if is loading', () => {
  const handleClose = jest.fn();
  const handleRemove = jest.fn();
  const loading = true;

  const { getByText } = render(
    <RemoveDeviceForm
      handleClose={handleClose}
      handleRemove={handleRemove}
      loading={loading}
    />
  );
  const button = getByText('Yes');
  expect(button.disabled).toBeTruthy();
});
