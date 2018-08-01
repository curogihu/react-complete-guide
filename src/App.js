import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working</p>
        <Person name="max" age="11" />
        <Person name="hikozuma" age="22">My Hobbies: Walking</Person>
        <Person name="aaa" age="33" />
      </div>
    );
  }
}

export default App;
