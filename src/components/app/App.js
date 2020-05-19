import React from 'react';
import './App.css';
import Landingpage from '../landingpage/landingpage'

let App=()=>{
  let setTitle =()=>{
    document.title = "JackDreds/Home"
  } 
  return (
    <div className="App" onLoad={setTitle}>
      <header className="App-header">
        <Landingpage/>
      </header>
    </div>
  );
}

export default App;
