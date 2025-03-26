import React, { Component } from 'react';  // Fixed import

class Navbar extends Component {
  state = {}; 
  render() { 
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <button className="navbar-brand btn btn-link text-white">
  Apna cart
</button>
          <a className="navbar-brand" href="/">  
            Apna cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
