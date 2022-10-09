import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import { Home } from './components/JSX/JSX1';
import { List } from './components/JSX/JSX2';
import { Profile } from './components/JSX/JSX3';
import { Login } from './components/JSX/JSX4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Login />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
