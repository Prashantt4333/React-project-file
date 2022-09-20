//import area 

//import something from some library

import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { App3 } from './App3';
import App2 from './App2';
//implementation area

// There are two typea of components  
// RCC => REACT CLASS COMPONENTS 
// RFC => REACT FUNCTIONAL COMPONENTS




function app4(){ //App 4 is a normal function 
    var name='prashant';
    return name;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App2 />
  </React.StrictMode>
)
