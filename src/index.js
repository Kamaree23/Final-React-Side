import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import App from './App';
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import Nav from './Nav';
import Signup from './auth/Signup';
import Login from './auth/Login';
import SingleCountry from './components/SingleCountry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Router>
    <div>
      <Nav />
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/:name' element={<SingleCountry/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
 </div>
  </Router>
   
  </>
);


