import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const token = false;

ReactDOM.render(
  <React.StrictMode>
    <App token={token}/>
  </React.StrictMode>,
  document.getElementById('root')
);

