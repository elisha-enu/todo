import {
    GET_LIST_TODO_SUCCESS,
    POST_TODO_SUCCESS,
    GET_DETAIL_TODO_SUCCESS,
    PUT_TODO_SUCCESS,
  } from './action'
  
  const initialState = {
    listToDo: [],
    detailToDo: {
      title: '',
      note: '',
    },
    isLoading: false,
    isError: false,
  };
  
  const reducer = (state= initialState, action) => {
    switch(action.type) {
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
      case GET_DETAIL_TODO_SUCCESS:
        return {
          ...state,
          detailToDo: action.payload,
        }
      case PUT_TODO_SUCCESS:
        return {
          ...state,
          detailToDo: action.payload,
        }
      default:
        return {
          ...state
        };
    }
  }
  
  export default reducer
  