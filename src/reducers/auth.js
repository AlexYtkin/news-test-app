import {
  FETCH_LOGIN_TYPES,
  FETCH_LOGOUT_TYPES,
  CLEAR_LOGIN_ERROR
} from '../constants/types'

//const initialState = JSON.parse(window.localStorage.getItem('auth')) || {};
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user || null,
  error: null,
  loading: null
}

function auth(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGIN_TYPES.REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_LOGIN_TYPES.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.data
      };
    case FETCH_LOGIN_TYPES.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case FETCH_LOGOUT_TYPES.REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_LOGOUT_TYPES.SUCCESS:
      return {
        ...state,
        loading: false,
        user: null
      };
    case FETCH_LOGOUT_TYPES.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
}

export default auth;