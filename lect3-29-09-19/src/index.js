import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login'
import Signup from './signup'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Login/> , document.getElementById("login"))
ReactDOM.render(<Signup/> , document.getElementById("signup"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(<Signup/>, document.getElementById());
