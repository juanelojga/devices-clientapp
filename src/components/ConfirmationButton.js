import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

const ConfirmationButton = ({
  loading,
  text = 'Yes',
  handleClick,
  type = 'button',
  disabled
}) => (
  <button onClick={handleClick} disabled={!!disabled} type={type}>
    {text}
    {loading ? (
      <span>
        &nbsp;&nbsp;
        <ClipLoader
          sizeUnit={'px'}
          size={15}
          color={'#123abc'}
          loading={loading}
        />
      </span>
    ) : null}
  </button>
);

ConfirmationButton.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

export default ConfirmationButton;
