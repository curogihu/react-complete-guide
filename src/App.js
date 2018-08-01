import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 11 },
      { name: 'hikozuma', age: 22 },
      { name: 'aaa', age: 33 }
    ],

    otherState: 'some other value'
  }

  // eventHandler
  switchNameHandler = (newName) => {
    // console.log('Was clicked');

    // don't do this because of no re-rendering
    // this.state.persons[0].name = 'aaaaaaaaaa';

    this.setState({
         persons: [
          { name: newName, age: 22 },
          { name: 'hikozumaA', age: 33 },
          { name: 'aaaA', age: 44 }
        ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working</p>
        <button onClick={ this.switchNameHandler.bind(this, 'abcdefg') }>Switch Name</button>
        <Person
          name={ this.state.persons[0].name }
          age={ this.state.persons[0].age } />

        <Person
          name={ this.state.persons[1].name }
          age={ this.state.persons[1].age }
          click={ this.switchNameHandler.bind(this, 'ABCDEFG') }
        >My Hobbies: Walking</Person>

        <Person
          name={ this.state.persons[2].name }
          age={ this.state.persons[2].age } />
      </div>
    );
  }
}

export default App;
