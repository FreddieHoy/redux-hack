import React, { Component } from 'react';

class FactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: '',
      source: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Add an OnSubmit

  render() {
    return (
      <div>
        <h1>Add new post</h1>
        <form>
          <div>
            <label>Add new fact: </label>
            <input
              type="text"
              name="fact"
              value={this.state.fact}
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

export default FactForm;
