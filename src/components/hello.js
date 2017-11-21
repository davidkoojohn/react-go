import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">hello { this.props.name }</h1>
      </div>
    );
  }
}

export default Hello;
