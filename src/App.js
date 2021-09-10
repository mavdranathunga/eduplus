import React from 'react';
//import logo from './ui/logo-udemy.svg';
import './CSS/App.css';
import './CSS/props.css';

//screen-----------------------------------------
import Header from './screens/header'
import Sidebar from './screens/sidebar'
import HomePage from './screens/home'
import Rightbar from './screens/rightbar'

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <HomePage />
      </div>
      <Rightbar />
    </div>
  );
}

export default App;
 