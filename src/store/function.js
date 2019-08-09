import {
  ON_ERROR,
  ON_LOADING,
  ON_SUCCESS,

  POST_TODO_SUCCESS,
  GET_LIST_TODO_SUCCESS,
  GET_DETAIL_TODO_SUCCESS,
  SHOW_HIDE_MODAL,
  SET_DATAID,
  SET_SEARCH_KEY,
  SET_FILTER,
} from './action'
import axios from 'axios'
import Cookie from 'cookie-universal'
import swal from 'sweetalert'

const apiURL = `https://pomonatodo.herokuapp.com`

export const onLoading = () => ({
  type: ON_LOADING,
})

export const onError = (payload) => ({
  type: ON_ERROR,
  payload,
})

export const onSuccess = () => {
  return ({
    type: ON_SUCCESS,
  })
}
  
export const handleLogin = (payload) => dispatch => {
  let URL = `${apiURL}/auth/login`

  let body = {
    email: payload.email,
    password: payload.password,
  }

  dispatch(onLoading())

  return axios.post(URL, body)
    .then(response => {
      const cookies = Cookie()
      cookies.set('token', response.data.data.token)
      dispatch(onSuccess())
    })
    .catch(error => {
      dispatch(postLoginError(error))
    });
}

export const postLoginError = (payload) => {
  swal('Login failed!', "Email or password is invalid!", "error");
  return ({
    type: ON_ERROR,
    payload,
  })
}

export const handleRegister = (payload) => dispatch => {
  let URL = `${apiURL}/auth/register`

  let body = {
    name: payload.name,
    email: payload.email,
    password: payload.password,
  }

  dispatch(onLoading())

  return axios.post(URL, body)
    .then(response => {
      const cookies = Cookie()
      cookies.set('token', response.data.data.token)
      dispatch(onSuccess())
    })
    .catch(error => {
      dispatch(postRegisterError(error))
  });
}

export const postRegisterError = (payload) => {
  swal('Oops!', "Failed to register, try using different email address!", "error");
  return ({
    type: ON_ERROR,
    payload,
  })
}

export const getListToDo = (query, filter) => (dispatch) => {
  let URL = `${apiURL}/todo/user?q=${query || ''}&filter=${filter}&limit=999999999`

  const cookies = Cookie()
  const cookieRes = cookies.get('token')

  const header = {"Authorization": cookieRes};

  dispatch(onLoading())

  return axios.get(URL, {headers: header})
  .then(response => {
    dispatch(getListToDoSuccess(response.data.data))
    dispatch(onSuccess())
  })
  .catch(error => {
    dispatch(onError(error))
  });
}

export const getListToDoSuccess = (payload) => ({
  type: GET_LIST_TODO_SUCCESS,
  payload,
})

export const postToDoSuccess = (payload) => {
  swal('Item created!', "Success create to do list!", "success");
  return ({
    type: POST_TODO_SUCCESS,
    payload,
  })
}

export const postToDoError = (payload) => {
  swal('Failed to create item', "Failed to create to do list", "error");
  return ({
    type: ON_ERROR,
    payload,
  })
}

export const handleAddToDo = (payload) => (dispatch, getState) => {
  let URL = `${apiURL}/todo/`

  const cookies = Cookie()
  const cookieRes = cookies.get('token')

  const header = {"Authorization": cookieRes};
  const body = {
    title: payload.title,
    priority: 1,
    note: payload.note,
  }

  dispatch(onLoading())

  return axios.post(URL, body, {headers: header})
    .then(response => {
      const oldData = getState().listToDo
      const newData = oldData.concat(response.data.data)
      dispatch(postToDoSuccess(newData))
      dispatch(handleShowHideModal(false, '', null))
    })
    .catch(error => {
      dispatch(postToDoError(error))
    });
}

export const handleDetailToDo = (payload) => (dispatch) => {
  let URL = `${apiURL}/todo/${payload}`

  const cookies = Cookie()
  const cookieRes = cookies.get('token')

  const header = {"Authorization": cookieRes};

  dispatch(onLoading())

  return axios.get(URL, {headers: header})
  .then(response => {
    dispatch(getDetailToDoSuccess(response.data.data))
    dispatch(handleShowHideModal(true,'preview',payload))
  })
  .catch(error => {
    dispatch(getDetailToDoError(error))
  });
}

export const getDetailToDoSuccess = (payload) => {
  return ({
    type: GET_DETAIL_TODO_SUCCESS,
    payload,
  })
}

export const getDetailToDoError = (payload) => {
  swal('Preview failed!', "Item not found", "error");
  return ({
    type: ON_ERROR,
    payload,
  })
}

export const handleUpdateToDo = (payload) => (dispatch, getState) => {
  let URL = `${apiURL}/todo/${payload.id}`

  const cookies = Cookie()
  const cookieRes = cookies.get('token')

  const header = {"Authorization": cookieRes};
  const body = {
    title: payload.title,
    priority: payload.priority,
    note: payload.note,
    isDone: payload.isDone,
  }

  dispatch(onLoading())

  return axios.put(URL, body, {headers: header})
  .then(response => {
    dispatch(putToDoSuccess(response.data.data))
    dispatch(handleShowHideModal(false, '', null))
    dispatch(getListToDo(getState().searchKey, getState().filter))
  })
  .catch(error => {
    dispatch(putToDoError(error))
  });
}

export const putToDoSuccess = () => {
  swal('Update success', "Item successfully updated!", "success");
  return  ({
    type: ON_SUCCESS,
  })
}

export const putToDoError = (payload) => {
  swal('Update failed', "Failed to update to do list", "error");
  return  ({
    type: ON_ERROR,
    payload,
  })
}

export const handleDeleteToDo = (payload) => (dispatch, getState) => {
  let URL = `${apiURL}/todo/${payload}`

  const cookies = Cookie()
  const cookieRes = cookies.get('token')

  const header = {"Authorization": cookieRes};

  dispatch(onLoading())

  return axios.delete(URL, {headers: header})
  .then(response => {
    dispatch(deleteToDoSuccess(response.data.data))
    dispatch(getListToDo(getState().searchKey, getState().filter))
    dispatch(handleShowHideModal(false, '', null))
  })
  .catch(error => {
    dispatch(deleteToDoError(error))
  });
}

export const deleteToDoSuccess = () => {
  swal('Item deleted!', "Item successfully deleted", "success");
  return ({
    type: ON_SUCCESS,
  })
}

export const deleteToDoError = (payload) => {
  swal('Delete failed!', "Failed to delete to do list", "error");
  return ({
    type: ON_ERROR,
    payload,
  })
}

export const handleShowHideModal = (isShow, modalType, dataId) => (dispatch) => {
  dispatch({
    type: SET_DATAID,
    payload: dataId,
  })
  dispatch({
    type: SHOW_HIDE_MODAL,
    payload: {isShow, modalType},
  })
}

export const handleSearchKey = (payload) => ({
  type: SET_SEARCH_KEY,
  payload,
})

export const handleFilter = (payload) => ({
  type: SET_FILTER,
  payload,
})