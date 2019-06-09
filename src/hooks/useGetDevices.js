import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { API_BASE_URL } from '../configs/constants';

const useGetDevices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_BASE_URL}/devices`);
    setData(response.data);
  };

  return data;
};

export default useGetDevices;
