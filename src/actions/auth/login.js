import {
  FETCH_LOGIN_TYPES,
  CLEAR_LOGIN_ERROR
} from '../../constants/types'

export function fetchLoginRequest(params){
  return {
    type: FETCH_LOGIN_TYPES.REQUEST,
    params
  }
}

export function fetchLoginSuccess(data){
  return {
    type: FETCH_LOGIN_TYPES.SUCCESS,
    data
  }
}

export function fetchLoginError(error) {
  return{
    type: FETCH_LOGIN_TYPES.ERROR,
    error
  }
}

export function clearLoginError() {
  return {
    type: CLEAR_LOGIN_ERROR
  }
}