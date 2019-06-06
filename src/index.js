import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';

import './index.scss';

import DevicesList from './components/DevicesList';
import * as serviceWorker from './serviceWorker';

const Dash = () => <div>Dash</div>;

const App = () => (
  <Router>
    <DevicesList path="/" />
    <Dash path="dashboard" />
  </Router>
);

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
