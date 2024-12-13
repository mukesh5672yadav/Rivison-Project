import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './page.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Custlogin from './cust_login';
import Page from './page';
import Admin from './adminpanel';
import Adminlogin from './adminlogin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Custlogin/>}></Route>
      <Route exact path="/page" element={<Page/>}></Route>
      <Route exact path='/admin' element={<Admin/>}></Route>
      <Route exact path='/adminlogin' element={<Adminlogin/>}></Route>
    </Routes>
    
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
