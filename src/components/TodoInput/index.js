import React, { Component } from 'react'

export default class TodoInput extends Component {
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
