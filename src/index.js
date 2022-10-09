import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './components/JSX/JSX1';
import { List } from './components/JSX/JSX2';
import { Profile } from './components/JSX/JSX3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Profile />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
