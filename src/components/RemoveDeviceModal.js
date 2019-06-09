import React from 'react';
import PropTypes from 'prop-types';

import RemoveDeviceForm from './RemoveDeviceForm';
import Modal from './Modal';

const RemoveDeviceModal = ({ handleClose, show, handleRemove, loading }) => (
  <Modal
    show={show}
    handleClose={handleClose}
    children={
      <RemoveDeviceForm
        handleClose={handleClose}
        handleRemove={handleRemove}
        loading={loading}
      />
    }
  />
);

RemoveDeviceModal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  handleRemove: PropTypes.func,
  loading: PropTypes.bool
};

export default RemoveDeviceModal;
