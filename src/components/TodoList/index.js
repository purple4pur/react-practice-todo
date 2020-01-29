import React, { PureComponent as Component } from 'react'
import { connect } from 'react-redux'

import { toggleTodo } from '../../redux/actions'

class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={this.handleChange.bind(this, todo.id)}
              />
              {todo.title}
            </li>
          ))
        }
      </ul>
    )
  }

  handleChange = (id) => {
    this.props.toggleTodo(id)
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo.list
})

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList)
