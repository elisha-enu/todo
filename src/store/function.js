import {
    SET_PASSWORD,
    SET_EMAIL,
    POST_TODO_SUCCESS,
    GET_LIST_TODO_SUCCESS,
    GET_LIST_TODO_ERROR,
  } from './action'
import axios from 'axios'
import Cookie from 'cookie-universal'

const apiURL = `https://pomonatodo.herokuapp.com`
  
export const setEmail = (payload) => ({
    type: SET_EMAIL,
    payload,
})

export const setPassword = (payload) => ({
    type: SET_PASSWORD,
    payload,
})
  
export const handleLogin = (payload) => {
    let URL = `${apiURL}/auth/login`

    let body = {
        email: payload.email,
        password: payload.password,
    }

    return axios.post(URL, body)
      .then(response => {
        const cookies = Cookie()
        cookies.set('token', response.data.data.token)
        return true
      })
      .catch(error => {
        throw(error);
      });

    // dispatch(setEmail(payload.email))
    // dispatch(setPassword(payload.password))
}

export const handleRegister = (payload) => {
    let URL = `${apiURL}/auth/register`

    let body = {
        name: payload.name,
        email: payload.email,
        password: payload.password,
    }

    return axios.post(URL, body)
      .then(response => {
        const cookies = Cookie()
        cookies.set('token', response.data.data.token)
        return true
      })
      .catch(error => {
        throw(error);
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