import React, { Component } from 'react'
import {
  TodoList,
  TodoInput
} from './components'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      todos: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(txt) {
    if (txt !== '') {
      this.setState({
        todos: this.state.todos.concat(txt),
        id: this.state.id + 1
      })
    }
  }

  render() {
    return (
      <>
        <h1>
          TODO
        </h1>
        <TodoList todos={this.state.todos} />
        <TodoInput id={this.state.id} click={this.handleClick} />
      </>
    )
  }
}
