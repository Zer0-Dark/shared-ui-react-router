import { Outlet, NavLink } from 'react-router-dom';
import './App.css';
import React from 'react';
import Links from './components/Links';
function App() {
  return (
    <div className='app'>

      <div className='main-ui'>
        <h1>Welcome to the shared ui application</h1>
        <p>This app is made with react router 6 </p>
      </div>

      <div className='page'>
        <div className='list'>
        <Links></Links>
        </div>
        <div className="content">
          <Outlet></Outlet>
        </div>
      </div>


    </div>
  )
}

export default App;
