import React from 'react';
import { SyncLoader } from 'react-spinners';
import PropTypes from 'prop-types';

const Loading = ({ loading }) => (
  <SyncLoader sizeUnit={'px'} size={15} color={'#123abc'} loading={loading} />
);

Loading.propTypes = {
  loading: PropTypes.bool
};

export default Loading;
