import React, { Component } from 'react';
import '../App.css';

// importing the components
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {name : "Raj"}
  }
  render() {
      return (
        <div className="App">
          <Header />
          {this.state.name}
          <Footer />
        </div>
      );
    }
}

export default App;
 