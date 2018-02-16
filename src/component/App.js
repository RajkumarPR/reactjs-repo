import React, { Component } from 'react';
import '../App.css';

// importing the components
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    const myName = "Raj Raigonde";
      return (
        <div className="App">
          <Header />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Footer />
        </div>
      );
    }
}

export default App;
 