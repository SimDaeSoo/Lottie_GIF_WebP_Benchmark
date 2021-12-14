import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './index.css';
import * as Stats from 'stats-js';

const stats = new Stats();
const update = () => {
  stats.update();
  requestAnimationFrame(update);
}

stats.dom.style.right = 0;
stats.dom.style.left = 'auto';
document.body.appendChild(stats.dom);
requestAnimationFrame(update);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <CustomProvider theme="dark">
        <App />
      </CustomProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);