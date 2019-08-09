import {
    GET_LIST_TODO_SUCCESS,
    POST_TODO_SUCCESS,
    GET_DETAIL_TODO_SUCCESS,
    PUT_TODO_SUCCESS,

    ON_LOADING,
    ON_ERROR,
    ON_SUCCESS,
    SHOW_HIDE_MODAL,
    SET_DATAID,
    DELETE_TODO_SUCCESS,
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
    modalType: '',
    dataId: null,
  };
  
  const reducer = (state= initialState, action) => {
    switch(action.type) {
      case ON_LOADING:
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
      case ON_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
          errMessage: action.payload,
        }
      case ON_SUCCESS:
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
          isLoading: false,
          isError: false,
          listToDo: action.payload,
        }
      case GET_DETAIL_TODO_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          detailToDo: action.payload,
        }
      case PUT_TODO_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          detailToDo: action.payload,
        }
      case DELETE_TODO_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          listToDo: action.payload,
        }
      case SHOW_HIDE_MODAL:
        return {
          ...state,
          isModalShow: action.payload.isShow,
          modalType: action.payload.modalType,
          // dataId: action.payload.dataId,
        }
      case SET_DATAID:
        return {
          ...state,
          dataId: action.payload,
        }
      default:
        return {
          ...state
        };
    }
  }
  
  export default reducer
  