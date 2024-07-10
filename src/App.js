import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return(
  <div className='App'>
    <div className='container'>
    <h1>
      Weather Application
    </h1>
      <Weather/>
      <footer>
      Coded by Saba and it is{" "}
       <a href='https://github.com/SabaKD/react-weather-application'>Open-sourced on github</a>
       </footer>
    </div>
  </div>
  );
}

