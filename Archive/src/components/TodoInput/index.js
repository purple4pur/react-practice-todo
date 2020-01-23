import React, { Component } from 'react'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.getTxt = this.getTxt.bind(this)
    this.click = this.click.bind(this)
  }

  getTxt(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  
  click() {
    this.props.click(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <form action="#" onSubmit={this.click}>
        <span>What needs to be done?</span><br />
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.getTxt}
        />
        <input
          type="submit"
          value={'Add #' + this.props.id}
        />
      </form>
    )
  }
}
