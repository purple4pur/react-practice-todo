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
      inputValue: e.target.value
    })
  }
  
  click = () => {
    this.props.click(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  setButtonValue = () => {
    return 'Add #' + this.props.id
  }

  render() {
    return (
      <form>
        <span>What needs to be done?</span><br />
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.getTxt}
        />
        <input
          type="submit"
          value={this.setButtonValue()}
          onClick={this.click}
          formAction="#"
        />
      </form>
    )
  }
}
