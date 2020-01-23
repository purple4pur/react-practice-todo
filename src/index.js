import React, { Component, PureComponent } from 'react'
import { render } from 'react-dom'

class TodoApp extends Component {
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
        <TodoList todos={this.state.todos} />
        <TodoInput
          text={this.state.text}
          cnt={this.state.cnt}
          handelSubmit={this.handelSubmit}
          handleChange={this.handleChange}
        />
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

class TodoList extends PureComponent {
  render() {
    console.log('TodoList render')
    return (
      <ul>
        {
          this.props.todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" />{todo.text}
            </li>
          ))
        }
      </ul>
    )
  }
}

class TodoInput extends Component {
  render() {
    return (
      <form onSubmit={this.props.handelSubmit}>
        <label>
          What needs to be done?
        </label><br />
        <input
          type="text"
          value={this.props.text}
          onChange={this.props.handleChange}
        />
        <input
          type="submit"
          value={'Add #' + this.props.cnt}
        />
      </form>
    )
  }
}

render(<TodoApp />, document.getElementById('todos-example'))