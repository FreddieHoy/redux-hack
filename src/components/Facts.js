import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFact } from '../actions/postActions';

class Facts extends Component {
  componentWillMount() {
    this.props.fetchFact();
  }
  render() {
    return (
      <div>
        <h1>Facts</h1>
        {this.props.facts.map((fact) => (
          <div>
            <h3>{fact.source}</h3>
            <p>{fact.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    facts: state.facts.items
  };
};

export default connect(mapStateToProps, { fetchFact })(Facts);
