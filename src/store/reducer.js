import {
    GET_LIST_TODO_SUCCESS,
    POST_TODO_SUCCESS,
    GET_DETAIL_TODO_SUCCESS,
    PUT_TODO_SUCCESS,
    POST_LOGIN_LOADING,
    POST_LOGIN_ERROR,
    POST_LOGIN_SUCCESS,
  } from './action'
  
  const initialState = {
    listToDo: [],
    detailToDo: {
      title: '',
      note: '',
    },
    isLoading: false,
    isError: false,
    errMessage: '',
    isModalShow: false,
  };
  
  const reducer = (state= initialState, action) => {
    switch(action.type) {
      case POST_LOGIN_LOADING:
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
      case POST_LOGIN_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
          errMessage: action.payload,
        }
      case POST_LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
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
  