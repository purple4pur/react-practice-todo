import React, { PureComponent as Component } from 'react'

import {
  TodoList,
  TodoInput
} from './components'

export default class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cnt: 1,
      text: '',
      todos: []
    }
    this.handelSubmit = this.handelSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <>
        <h3>TODO</h3>
        <TodoInput
          text={this.state.text}
          cnt={this.state.cnt}
          handelSubmit={this.handelSubmit}
          handleChange={this.handleChange}
        />
        <TodoList todos={this.state.todos} />
      </>
    )
  }
  handelSubmit(e) {
    e.preventDefault()
    if (this.state.text === '') { return }
    this.setState({
      todos: this.state.todos.concat({
        id: Date.now(),
        text: this.state.text
      }),
      cnt: this.state.cnt + 1,
      text: ''
    })

  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }
}
