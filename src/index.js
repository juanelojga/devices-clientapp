import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';

import './index.scss';

import Component from './components/Component';
import * as serviceWorker from './serviceWorker';

const Dash = () => <div>Dash</div>;

const App = () => (
  <Router>
    <Component path="/" />
    <Dash path="dashboard" />
  </Router>
);

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
