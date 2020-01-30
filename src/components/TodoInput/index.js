import React, { PureComponent as Component } from 'react'
import { connect } from 'react-redux'

import { changeInput, addTodo, getTodo } from 'redux/actions'

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
        <button onClick={this.handleClickAdd}>{'Add #' + this.props.id}</button>
        <button onClick={this.handleClickGet}>Get todos online!</button>
      </form>
    )
  }

  handleChange = (e) => {
    this.props.changeInput(e.target.value)
  }

  handleClickAdd = (e) => {
    e.preventDefault()
    this.props.addTodo(this.props.inputValue)
  }

  handleClickGet = (e) => {
    e.preventDefault()
    this.props.getTodo()
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.todo.inputValue,
  id: state.todo.id
})

export default connect(
  mapStateToProps,
  { changeInput, addTodo, getTodo }
)(TodoInput)
