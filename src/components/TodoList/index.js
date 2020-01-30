import React, { PureComponent as Component } from 'react'
import { connect } from 'react-redux'

import { toggleTodo } from '../../redux/actions'

class TodoList extends Component {
  render() {
    console.log(this.props.todos)
    return (
      <ol>
        {
          this.props.isLoading
            ? <span>Loading...</span>
            : this.props.todos.length
              ? this.props.todos.map(todo => (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={this.handleChange.bind(this, todo.id)}
                  />
                  {todo.title}
                </li>
              ))
              : <span>Add your first todo now!</span>
        }
      </ol>
    )
  }

  handleChange = (id) => {
    this.props.toggleTodo(id)
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo.list,
  isLoading: state.todo.isLoading
})

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList)
