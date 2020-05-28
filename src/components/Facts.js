import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFact } from '../actions/postActions';

class Facts extends Component {
  componentDidMount() {
    this.props.fetchFact();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newFact) {
      this.props.facts.unshift(nextProps.newFact);
    }
  }

  render() {
    return (
      <div>
        <h1>Facts</h1>
        {this.props.facts.map((fact) => (
          <div key={fact.text}>
            <h3>{fact.source}</h3>
            <p>{fact.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

Facts.propTypes = {
  fetchFact: PropTypes.func.isRequired,
  facts: PropTypes.array.isRequired,
  newFact: PropTypes.object
};

const mapStateToProps = (state) => ({
  facts: state.facts.items,
  newFact: state.facts.item
});

export default connect(mapStateToProps, { fetchFact })(Facts);
