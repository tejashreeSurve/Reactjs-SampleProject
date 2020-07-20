import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Avatar from './Avatar';
import LoginForm from './Component/LoginForm.jsx';
import SignUpForm from './Component/SignUpForm';
import User from './Component/User';

ReactDOM.render(
  <React.StrictMode>
  <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
