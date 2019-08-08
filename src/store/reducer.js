import {
    SET_EMAIL,
    SET_PASSWORD,
    SET_NAME,
    GET_LIST_TODO_SUCCESS,
    POST_TODO_SUCCESS,
  } from './action'
  
  const initialState = {
    name: '',
    email: '',
    password: '',
    listToDo: [],
  };
  
  const reducer = (state= initialState, action) => {
    switch(action.type) {
      case SET_NAME:
        return {
          ...state,
          name: action.name,
        }
      case SET_EMAIL:
        return {
          ...state,
          email: action.payload,
        }
      case SET_PASSWORD:
        return {
          ...state,
          password: action.payload,
        }
      case GET_LIST_TODO_SUCCESS:
        return {
          ...state,
          listToDo: action.payload,
        }
      case POST_TODO_SUCCESS:
        return {
          ...state,
          listToDo: action.payload,
        }
      default:
        return {
          ...state
        };
    }
  }
  
  export default reducer
  