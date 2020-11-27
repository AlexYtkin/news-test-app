import { put, takeEvery } from 'redux-saga/effects'
import { FETCH_LOGOUT_TYPES } from '../../constants/types'
import { fetchLogoutSuccess, fetchLogoutError } from '../../actions/auth/logout'

export function* logout(action) {
  /*
  if(window.location.reload){
    localStorage.clear()
  }
   */
  try{
    const data = null;
    yield put(fetchLogoutSuccess(data));
    localStorage.removeItem("user");
  } catch (error) {
    // const data = {code: 500, userMessage: 'Internal Server Error'};
    const data = error
    yield put(fetchLogoutError(data));
  }
}

export function* watchLoadLogoutRequest() {
  yield takeEvery(FETCH_LOGOUT_TYPES.REQUEST, logout);
}
