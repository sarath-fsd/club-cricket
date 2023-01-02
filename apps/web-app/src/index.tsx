import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import configureStore from './store/configure.store';
import App from '../src/app/app';

const rootElement = document.getElementById('root');

render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  rootElement
);
