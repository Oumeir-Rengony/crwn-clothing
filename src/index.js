import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import { ContextProvider } from './context/provider';

import './index.css';
import App from './App';

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById('root')
);
