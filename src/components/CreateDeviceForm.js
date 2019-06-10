import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, startCase, snakeCase, isNaN } from 'lodash';

import ConfirmationButton from './ConfirmationButton';

import styles from './CreateDeviceForm.module.scss';

import { DEVICE_TYPES } from '../configs/constants';

const CreateDeviceForm = ({
  system_name,
  type,
  hdd_capacity,
  handleSubmit,
  handleClose,
  loading
}) => {
  const [validationErrors, setValidationErrors] = useState({});
  const [systemName, setSystemName] = useState(system_name);
  const [systemType, setSystemType] = useState(snakeCase(type));
  const [hddCapacity, setHddCapacity] = useState(hdd_capacity);

  const onSubmit = e => {
    e.preventDefault();

    const capacity = parseInt(hddCapacity);
    // validation
    const errors = {};
    if (isEmpty(systemName)) errors['systemName'] = true;
    if (isEmpty(systemType)) errors['systemType'] = true;
    if (isEmpty(hddCapacity) || isNaN(capacity)) errors['hddCapacity'] = true;

    setValidationErrors(errors);

    if (isEmpty(errors)) {
      handleSubmit({
        system_name: systemName,
        type: systemType.toUpperCase(),
        hdd_capacity: capacity.toString()
      });
    }
  };

  return (
    <div>
      <h3>Device Form</h3>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.group}>
          <input
            type="text"
            value={systemName}
            onChange={e => {
              setValidationErrors({});
              setSystemName(e.target.value);
            }}
            placeholder="System Name"
          />
          <label>System Name</label>
          {validationErrors['systemName'] ? (
            <p className={styles.error}>Invalid System Name</p>
          ) : null}
        </div>
        <div className={styles.group}>
          <select
            value={systemType}
            onChange={e => {
              setValidationErrors({});
              setSystemType(e.target.value);
            }}
          >
            <option value="" />
            {DEVICE_TYPES.slice(1).map(deviceType => (
              <option value={deviceType} key={deviceType}>
                {startCase(deviceType)}
              </option>
            ))}
          </select>
          <label>Type</label>
          {validationErrors['systemType'] ? (
            <p className={styles.error}>Invalid Type</p>
          ) : null}
        </div>
        <div className={styles.group}>
          <input
            type="text"
            value={hddCapacity}
            onChange={e => {
              setValidationErrors({});
              setHddCapacity(e.target.value);
            }}
            placeholder="HDD Capacity"
          />
          <label>HDD Capacity</label>
          {validationErrors['hddCapacity'] ? (
            <p className={styles.error}>Invalid HDD Capacity</p>
          ) : null}
        </div>
        <div className={styles.buttons}>
          <button onClick={handleClose} className="btn btn-red">
            Close
          </button>
          &nbsp;&nbsp;
          <ConfirmationButton
            type="submit"
            disabled={loading}
            loading={loading}
            text="Confirm"
          />
        </div>
      </form>
    </div>
  );
};

CreateDeviceForm.propTypes = {
  system_name: PropTypes.string,
  type: PropTypes.string,
  hdd_capacity: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
  loading: PropTypes.bool
};

export default CreateDeviceForm;
