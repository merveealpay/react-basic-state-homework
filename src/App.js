import React from 'react';
import { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

state = {
  username: 'merve'
}

userNameChangedHandler = (event) => {
    this.setState({username: event.target.value});
}
  
  render() {
  return (
    <div className="App">
      <UserInput 
      changed = {this.userNameChangedHandler} //updated
      currentName = {this.state.username} /> 
      <UserOutput userName = {this.state.username}/>
      <UserOutput userName = "Merve" />




    </div>
  );
  };
}

export default App;
