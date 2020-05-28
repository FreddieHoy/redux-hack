import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFact } from '../actions/postActions';
import PropTypes from 'prop-types';

class FactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      source: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const fact = {
      text: this.state.text,
      source: this.state.source
    };

    this.props.createFact(fact);
  }

  render() {
    return (
      <div>
        <h1>Add new post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Add new fact: </label>
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Add fact source: </label>
            <input
              type="text"
              name="source"
              value={this.state.source}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

FactForm.propTypes = {
  createFact: PropTypes.func.isRequired
};

export default connect(null, { createFact })(FactForm);
