import React from 'react';
import PropTypes from 'prop-types';

const DeviceView = ({ systemName, type, hddCapacity }) => (
  <div>
    <h2>{systemName}</h2>
    <p>{type}</p>
    <p>{hddCapacity}</p>
  </div>
);

DeviceView.propTypes = {
  systemName: PropTypes.string,
  type: PropTypes.string,
  hddCapacity: PropTypes.string
};

export default DeviceView;
