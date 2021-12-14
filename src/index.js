import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomProvider theme="dark">
        <App />
      </CustomProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);