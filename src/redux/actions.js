import actionTypes from './actionTypes'

export const addTodo = (title) => ({
  type: actionTypes.ADD_TODO,
  payload: { title }
})

export const changeInput = (value) => ({
  type: actionTypes.CHANGE_INPUT,
  payload: { value }
})
