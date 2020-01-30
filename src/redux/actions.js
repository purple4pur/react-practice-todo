import actionTypes from './actionTypes'
import { getTodos } from 'services'

const startAddTodo = title => ({
  type: actionTypes.START_ADD_TODO,
  payload: { title }
})

export const addTodo = title => dispatch => {
  if (title !== '') {
    dispatch(startAddTodo(title))
  }
}

export const changeInput = value => ({
  type: actionTypes.CHANGE_INPUT,
  payload: { value }
})

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  payload: { id }
})

const startGetTodo = () => ({
  type: actionTypes.START_GET_TODO
})

const getTodoSuccess = (data, status) => ({
  type: actionTypes.GET_TODO_SUCCESS,
  payload: { data, status }
})

const getTodoFailed = err => ({
  type: actionTypes.GET_TODO_FAILED,
  payload: { err }
})

export const getTodo = () => dispatch => {
  dispatch(startGetTodo())
  getTodos()
    .then(resp => {
      dispatch(getTodoSuccess(resp.data, resp.status))
    })
    .catch(err => {
      console.log(err)
      dispatch(getTodoFailed())
    })
}
