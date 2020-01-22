import React, { Component } from 'react'
import {
  TodoList
} from './components'

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Todos</h1>
        <TodoList />
      </>
    )
  }
}
