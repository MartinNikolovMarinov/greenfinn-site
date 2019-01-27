import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
Modal.setAppElement(root);
ReactDOM.render(<App />, root);

serviceWorker.unregister();
