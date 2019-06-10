import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, startCase, snakeCase, isNaN } from 'lodash';

import ConfirmationButton from './ConfirmationButton';

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
    <form onSubmit={onSubmit}>
      <div>
        <label>System Name</label>
        <input
          type="text"
          value={systemName}
          onChange={e => setSystemName(e.target.value)}
          className={validationErrors['systemName'] ? 'has-error' : null}
        />
      </div>
      <div>
        <label>Type</label>
        <select
          value={systemType}
          onChange={e => setSystemType(e.target.value)}
          className={validationErrors['systemType'] ? 'has-error' : null}
        >
          <option value="" />
          {DEVICE_TYPES.slice(1).map(deviceType => (
            <option value={deviceType} key={deviceType}>
              {startCase(deviceType)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>HDD Capacity</label>
        <input
          type="text"
          value={hddCapacity}
          onChange={e => setHddCapacity(e.target.value)}
          className={validationErrors['hddCapacity'] ? 'has-error' : null}
        />
      </div>
      <ConfirmationButton
        type="submit"
        disabled={loading}
        loading={loading}
        text="Submit"
      />
      <button onClick={handleClose}>Close</button>
    </form>
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
