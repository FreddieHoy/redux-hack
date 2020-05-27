import React, { Component } from 'react';

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: []
    };
  }

  componentWillMount() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ facts: [{ text: data.text, source: data.source }] });
      });
  }

  render() {
    return (
      <div>
        <h1>Facts</h1>
        {this.state.facts.map((fact) => (
          <div>
            <h3>{fact.source}</h3>
            <p>{fact.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Facts;
