import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import Device from './Device';

import styles from './Devices.module.scss';

const Devices = ({
  loading,
  devices,
  handleRemoveDevice,
  handleEditDevice
}) => (
  <div className={styles.devices}>
    {loading ? (
      <div className="u-center-text">
        <Loading loading={loading} />
      </div>
    ) : devices.length ? (
      devices.map(device => (
        <Device
          key={device.id}
          deviceId={device.id}
          systemName={device.system_name}
          type={device.type}
          hddCapacity={device.hdd_capacity}
          handleRemoveDevice={() => handleRemoveDevice(device)}
          handleEditDevice={() => handleEditDevice(device)}
        />
      ))
    ) : (
      <div className="u-center-text">
        <h2>No Results were found.</h2>
      </div>
    )}
  </div>
);

Devices.propTypes = {
  loading: PropTypes.bool,
  devices: PropTypes.array,
  handleRemoveDevice: PropTypes.func,
  handleEditDevice: PropTypes.func
};

export default Devices;
