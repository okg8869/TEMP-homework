import React, { Component } from 'react';
import './App.css';

import UserInput from './Component/UserInput'
import UserOutput from './Component/UserOutput'
import Validation from './Component/Validation'


class App extends Component {
  state = {
    nameList: [
      {name: 'Bobby'},
      {name: 'Toby'},
      {name: 'Egwayne'}
    ]
  }

  changeNameHandler = () => {
    this.setState( {
      nameList: [
        {name: 'Bobby'},
        {name: 'Toby'},
        {name: 'HOLYSHITANEWNAMEHERE!!!'} 
      ]
    } )
  }

  onChangeHandler = (event) => {
    this.setState( {
      nameList: [
        {name: 'Bobby'},
        {name: event.target.value},
        {name: 'Egwayne'} 
      ]
    } )
  }

  onChangeLengthHandler = (event) => {

  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.onChangeHandler} name={this.state.nameList[1].name}></UserInput>
        <button onClick={this.changeNameHandler}>Switch Name</button>
        <UserOutput name='WhoCares'></UserOutput>
        <UserOutput name={this.state.nameList[1].name}></UserOutput>
        <UserOutput name={this.state.nameList[2].name}></UserOutput>

        <Validation></Validation>
      </div>
    );
  }
}

export default App;
