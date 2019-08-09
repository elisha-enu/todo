import {
  ON_ERROR,
  ON_LOADING,
  ON_SUCCESS,

  POST_TODO_SUCCESS,
  GET_LIST_TODO_SUCCESS,
  GET_DETAIL_TODO_SUCCESS,
  PUT_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  SHOW_HIDE_MODAL,
  SET_DATAID,
} from './action'
import axios from 'axios'
import Cookie from 'cookie-universal'

const apiURL = `https://pomonatodo.herokuapp.com`

export const onLoading = () => ({
  type: ON_LOADING,
})

export const onError = (payload) => ({
  type: ON_ERROR,
  payload,
})

export const onSuccess = () => ({
  type: ON_SUCCESS,
})
  
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
      dispatch(onError(error))
    });
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
      dispatch(onError(error))
  });
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

export const postToDoSuccess = payload => ({
  type: POST_TODO_SUCCESS,
  payload,
})

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
      dispatch(onError(error))
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
    dispatch(onError(error))
  });
}

export const getDetailToDoSuccess = (payload) => {
  return ({
    type: GET_DETAIL_TODO_SUCCESS,
    payload,
  })
}

export const handleUpdateToDo = (payload) => (dispatch) => {
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
    // dispatch(putToDoSuccess(response.data.data))
    dispatch(onSuccess())
    dispatch(handleShowHideModal(false, '', null))
    dispatch(getListToDo('','all'))
  })
  .catch(error => {
    dispatch(onError(error))
  });
}

export const putToDoSuccess = (payload) => ({
  type: PUT_TODO_SUCCESS,
  payload,
})

export const handleDeleteToDo = (payload) => (dispatch, getState) => {
  let URL = `${apiURL}/todo/${payload}`

  const cookies = Cookie()
  const cookieRes = cookies.get('token')

  const header = {"Authorization": cookieRes};

  dispatch(onLoading())

  return axios.delete(URL, {headers: header})
  .then(response => {
    dispatch(getListToDo('', 'all'))
    dispatch(handleShowHideModal(false, '', null))
  })
  .catch(error => {
    dispatch(onError(error))
  });
}

export const deleteToDoSuccess = (payload) => ({
  type: DELETE_TODO_SUCCESS,
  payload,
})

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
