import * as React from 'react'
import '../../App.css';
import TodoInput from '../TodoInput'
import TodoItems from '../TodoItems'
import TodoFilterOptions from '../TodoFilterOptions'

const logo = require('../../logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header mb5">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Typescript Todo App</h1>
        </header>
        <TodoInput />
        <TodoItems />
        <TodoFilterOptions />
      </div>
    )
  }
}

export default App;