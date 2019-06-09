import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

const ConfirmationButton = ({ loading, text, handleClick }) => (
  <button onClick={handleClick} disabled={!!loading}>
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
  handleClick: PropTypes.func
};

ConfirmationButton.defaultProps = {
  text: 'Yes'
};

export default ConfirmationButton;
