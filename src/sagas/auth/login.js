import { put, takeEvery } from 'redux-saga/effects'
import { FETCH_LOGIN_TYPES } from '../../constants/types'
import { fetchLoginSuccess, fetchLoginError } from '../../actions/auth/login'

function correctData(params){
  return {
    name: params.user.name,
    role: params.user.name === 'admin' ? 'admin' : 'employee'
  }
}

export function* login(action) {
  try{
    if(action.params.user.name === 'admin' && action.params.user.password === '123'
      || (action.params.user.name === 'user' && action.params.user.password === 'qwe123')){
      const data = correctData(action.params)
        yield put(fetchLoginSuccess(data));
        const user = JSON.stringify(data);
        localStorage.setItem("user", user);
    } else {
        const data = "Неверный логин или пароль.";
        yield put(fetchLoginError(data));
    }
  } catch (error) {
    // const data = {code: 500, userMessage: 'Internal Server Error'};
    const data = error
    yield put(fetchLoginError(data));
  }
}

export function* watchLoadLoginRequest() {
  yield takeEvery(FETCH_LOGIN_TYPES.REQUEST, login);
}