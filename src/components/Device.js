import React from 'react';
import PropTypes from 'prop-types';

import styles from './Device.module.scss';

const DeviceView = ({
  systemName,
  type,
  hddCapacity,
  handleRemoveDevice,
  handleEditDevice,
  deviceId
}) => (
  <div className="row">
    <div className={styles.device}>
      <div className={styles.text}>
        <h2 className={styles.heading}>{systemName}</h2>
        <p>{type}</p>
        <p>{hddCapacity}</p>
        <div className={styles.actions}>
          <button
            onClick={handleRemoveDevice}
            className="btn btn-red"
            data-testid={`remove-${deviceId}`}
          >
            Remove
          </button>
          &nbsp;&nbsp;
          <button
            onClick={handleEditDevice}
            className="btn btn-green"
            data-testid={`edit-${deviceId}`}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
);

DeviceView.propTypes = {
  deviceId: PropTypes.string,
  systemName: PropTypes.string,
  type: PropTypes.string,
  hddCapacity: PropTypes.string,
  handleRemoveDevice: PropTypes.func,
  handleEditDevice: PropTypes.func
};

export default DeviceView;
