import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


global.success = [];
global.carted = 0;
global.copped = 0;
global.delay = 3500;
global.stopped = {};
ReactDOM.render( < App / > , document.getElementById('root'));

serviceWorker.unregister();