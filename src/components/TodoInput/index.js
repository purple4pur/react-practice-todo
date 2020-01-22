import React, { Component } from 'react'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }

  getTxt = (e) => {
    this.setState({
      inputValue: e.currentTarget.value
    })
  }

  click = () => {
    this.props.click(this.state.inputValue)
  }

  render() {
    return (
      <>
        <span>What needs to be done?</span>
        <input type="text" value={this.state.inputValue} onChange={this.getTxt} />
        <button onClick={this.click}>Add #{this.props.id}</button>
      </>
    )
  }
}
