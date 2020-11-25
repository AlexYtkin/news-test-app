import { all } from 'redux-saga/effects'
import {watchLoadLoginRequest} from './auth/login'
import {watchLoadLogoutRequest} from './auth/logout'

export default function* rootSaga() {
  yield all([
    watchLoadLoginRequest(),
    watchLoadLogoutRequest()
  ])
}