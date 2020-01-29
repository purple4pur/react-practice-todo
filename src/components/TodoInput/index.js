import React, { PureComponent as Component } from 'react'
import { connect } from 'react-redux'

import { changeInput, addTodo } from '../../redux/actions'

class TodoInput extends Component {
  render() {
    return (
      <form>
        <label>
          What needs to be done?
        </label><br />
        <input
          type="text"
          value={this.props.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>{'Add #' + this.props.id}</button>
      </form>
    )
  }

  handleChange = (e) => {
    this.props.changeInput(e.target.value)
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.addTodo(this.props.inputValue)
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.todo.inputValue,
  id: state.todo.id
})

export default connect(
  mapStateToProps,
  { changeInput, addTodo }
)(TodoInput)
