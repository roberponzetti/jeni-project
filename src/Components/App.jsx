import React from 'react';
import Routes from './routes/Routes';
import {Provider } from 'react-redux'
import Store from '../redux/Store'

const App = () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);

export default App;
