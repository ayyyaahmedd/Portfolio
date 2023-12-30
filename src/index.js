import React from 'react';
import ReactDOM from 'react-dom/client';
//import  ReactDOM  from 'react-dom';
import App from './component/app';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

//ReactDOM.render(<App/> , document.querySelector("#root"))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
