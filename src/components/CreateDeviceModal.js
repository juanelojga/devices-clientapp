import React from 'react';
import PropTypes from 'prop-types';

import CreateDeviceForm from './CreateDeviceForm';
import Modal from './Modal';

const CreateDeviceModal = ({
  handleClose,
  handleSubmit,
  loading,
  system_name = '',
  type = '',
  hdd_capacity = ''
}) => (
  <Modal
    handleClose={handleClose}
    children={
      <CreateDeviceForm
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        loading={loading}
        system_name={system_name}
        type={type}
        hdd_capacity={hdd_capacity}
      />
    }
  />
);

CreateDeviceModal.propTypes = {
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
  system_name: PropTypes.string,
  type: PropTypes.string,
  hdd_capacity: PropTypes.string
};

export default CreateDeviceModal;
