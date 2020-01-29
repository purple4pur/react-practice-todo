import React, { PureComponent as Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    console.log(this.props.todos)
    return (
      <ul>
        {
          this.props.todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" />{todo.title}
            </li>
          ))
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo.list
})

export default connect(
  mapStateToProps
)(TodoList)
