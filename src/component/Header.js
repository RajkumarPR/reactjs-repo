import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {

  render() {
    console.log(this.props)
    return (
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h1>{this.props.Title}</h1>
      </header>
    );
  }
} 

export default Header;
