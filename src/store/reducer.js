import {
    GET_LIST_TODO_SUCCESS,
    POST_TODO_SUCCESS,
    GET_DETAIL_TODO_SUCCESS,

    ON_LOADING,
    ON_ERROR,
    ON_SUCCESS,

    SHOW_HIDE_MODAL,
    SET_DATAID,
    SET_SEARCH_KEY,
    SET_FILTER,
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
    filter: 'all',
    searchKey: '',
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
      case SHOW_HIDE_MODAL:
        return {
          ...state,
          isModalShow: action.payload.isShow,
          modalType: action.payload.modalType,
        }
      case SET_DATAID:
        return {
          ...state,
          dataId: action.payload,
        }
      case SET_SEARCH_KEY:
        return {
          ...state,
          searchKey: action.payload,
        }
      case SET_FILTER:
        return {
          ...state,
          filter: action.payload,
        }
      default:
        return {
          ...state
        };
    }
  }
  
  export default reducer
  