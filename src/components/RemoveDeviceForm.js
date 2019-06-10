import React from 'react';
import PropTypes from 'prop-types';

import ConfirmationButton from './ConfirmationButton';

const RemoveDeviceForm = ({ handleClose, handleRemove, loading }) => (
  <div>
    <h3>Are you sure that you want to remove this device?</h3>
    <button onClick={handleClose} disabled={loading}>
      No
    </button>
    <ConfirmationButton
      text="Yes"
      handleClick={handleRemove}
      loading={loading}
      disabled={loading}
    />
  </div>
);

RemoveDeviceForm.propTypes = {
  handleClose: PropTypes.func,
  handleRemove: PropTypes.func,
  loading: PropTypes.bool
};

export default RemoveDeviceForm;
