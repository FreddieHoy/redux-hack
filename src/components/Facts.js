import React, { Component } from 'react';

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: []
    };
  }

  render() {
    return (
      <div>
        <h1>Facts</h1>
      </div>
    );
  }
}

export default Facts;
