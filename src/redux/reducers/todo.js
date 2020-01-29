import actionTypes from '../actionTypes'

const initState = {
  id: 1,
  inputValue: '',
  list: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        id: state.id + 1,
        inputValue: '',
        list: [
          ...state.list,
          { id: state.id - 1, title: action.payload.title, isCompleted: false }
        ]
      }
    case actionTypes.CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.payload.value
      }
    case actionTypes.TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isCompleted: !item.isCompleted
            }
          }
          return item
        })
      }
    default:
      return state
  }
}
