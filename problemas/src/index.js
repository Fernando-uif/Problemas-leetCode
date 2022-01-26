import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import { ScreenProblema1 } from './Problemas_Basicos/ScreenProblema1';
import { ScreenProblema2 } from './Problemas_Basicos/ScreenProblema2';

ReactDOM.render(
  <React.StrictMode>
    <ScreenProblema2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
