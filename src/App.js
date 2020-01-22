import React, { Component } from 'react'
import {
  TodoList,
  TodoInput
} from './components'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: 1
    }
  }
  
  handleClick = (txt) => {
    console.log(txt)
  }

  render() {
    return (
      <>
        <h1>TODO</h1>
        <TodoList />
        <TodoInput id={this.state.id} click={this.handleClick} />
      </>
    )
  }
}
