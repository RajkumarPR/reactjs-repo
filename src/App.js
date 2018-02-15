import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.name ="Raj";
  }
  
  getval() {
  return "Raj";
  }  

render() {
  const myName = "Raj Raigonde";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>My Name is from constructor {this.name}</h3>
        <h3>My Name is from const  {myName}</h3>
        <h3>My Name is from method  {this.getval()}</h3>
      </div>
    );
  }
}

export default App;
