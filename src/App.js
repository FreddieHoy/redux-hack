import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Facts from './components/Facts';
import FactForm from './components/FactForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux HACK
          </a>
        </header>
        <FactForm />
        <hr />
        <Facts />
      </div>
    </Provider>
  );
}

export default App;
