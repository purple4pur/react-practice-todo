import actionTypes from '../actionTypes'

const initState = {
  id: 4,
  inputValue: '',
  isLoading: false,
  list: [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }, {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  }, {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }]
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_ADD_TODO:
      return {
        ...state,
        id: state.list.length + 2,
        inputValue: '',
        list: [
          ...state.list,
          { userId: 1, id: state.id, title: action.payload.title, completed: false }
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
              completed: !item.completed
            }
          }
          return item
        })
      }
    case actionTypes.START_GET_TODO:
      return {
        ...state,
        isLoading: true,
        id: 1,
      }
    case actionTypes.GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: action.payload.status + 1,
        list: action.payload.data
      }
    default:
      return state
  }
}
