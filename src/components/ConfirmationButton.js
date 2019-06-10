import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

import styles from './ConfirmationButton.module.scss';

const ConfirmationButton = ({
  loading,
  text = 'Yes',
  handleClick,
  type = 'button',
  disabled
}) => (
  <button
    onClick={handleClick}
    disabled={!!disabled}
    type={type}
    className="btn btn-green"
  >
    {text}
    {loading ? (
      <span className={styles.container}>
        &nbsp;&nbsp;
        <ClipLoader
          css={{ position: 'absolute', top: 0 }}
          sizeUnit={'rem'}
          size={1.5}
          color={'#fff'}
          loading={!loading}
        />
        &nbsp;&nbsp;
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
