import {
  ON_ERROR,
  ON_LOADING,
  ON_SUCCESS,

  POST_TODO_SUCCESS,
  GET_LIST_TODO_SUCCESS,
  GET_DETAIL_TODO_SUCCESS,
  PUT_TODO_SUCCESS,
  SHOW_HIDE_MODAL,
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
      console.log('masuk sukses')
      const cookies = Cookie()
      cookies.set('token', response.data.data.token)
      dispatch(onSuccess())
    })
    .catch(error => {
      console.log('masuk error')
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
      console.log('masuk error')
      dispatch(onError(error))
  });
}

export const getListToDo = (query, filter) => (dispatch) => {
  let URL = `${apiURL}/todo/user?q=${query || ''}&filter=${filter}`

  const cookies = Cookie()
  const cookieRes = cookies.get('token')

  const header = {"Authorization": cookieRes};

  return axios.get(URL, {headers: header})
  .then(response => {
    dispatch(getListToDoSuccess(response.data.data))
  })
  .catch(error => {
    throw(error);
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

  return axios.post(URL, body, {headers: header})
  .then(response => {
    const oldData = getState().listToDo
    const newData = oldData.concat(response.data.data)
    dispatch(postToDoSuccess(newData))
  })
  .catch(error => {
    throw(error);
  });
}

export const handleDetailToDo = (payload) => (dispatch) => {
  let URL = `${apiURL}/todo/${payload}`
  console.log('function payload', payload)

  const cookies = Cookie()
  const cookieRes = cookies.get('token')

  const header = {"Authorization": cookieRes};

  return axios.get(URL, {headers: header})
  .then(response => {
    dispatch(getDetailToDoSuccess(response.data.data))
  })
  .catch(error => {
    throw(error);
  });
}

export const getDetailToDoSuccess = (payload) => {
  console.log('get detail masuk')
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
    priority: 1,
    note: payload.note,
  }

  return axios.put(URL, body, {headers: header})
  .then(response => {
    dispatch(putToDoSuccess(response.data.data))
  })
  .catch(error => {
    throw(error);
  });
}

export const putToDoSuccess = (payload) => ({
  type: PUT_TODO_SUCCESS,
  payload,
})

export const handleDeleteToDo = (payload) => (dispatch) => {
  let URL = `${apiURL}/todo/${payload}`

  const cookies = Cookie()
  const cookieRes = cookies.get('token')

  const header = {"Authorization": cookieRes};

  return axios.delete(URL, {headers: header})
  .then(response => {
    console.log('response', response.data)
    // dispatch(deleteToDoSuccess(response.data))
    // dispatch(getDetailToDoSuccess(response.data.data))
  })
  .catch(error => {
    throw(error);
  });
}

export const handleShowHideModal = (isShow, modalType) => {
  console.log(isShow, 'isShow')
  console.log(modalType, 'modalType')
  return ({
    type: SHOW_HIDE_MODAL,
    payload: {isShow, modalType}
  })
}