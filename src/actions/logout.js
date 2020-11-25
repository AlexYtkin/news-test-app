import { FETCH_LOGOUT_TYPES } from '../constants/types'

export function fetchLogoutRequest(params){
  return {
    type: FETCH_LOGOUT_TYPES.REQUEST,
    params
  }
}

export function fetchLogoutSuccess(data){
  return {
    type: FETCH_LOGOUT_TYPES.SUCCESS,
    data
  }
}

export function fetchLogoutError(error) {
  return{
    type: FETCH_LOGOUT_TYPES.ERROR,
    error
  }
}