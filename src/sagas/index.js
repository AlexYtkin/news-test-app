import {all} from 'redux-saga/effects'
import {watchLoadLoginRequest} from './auth/login'
import {watchLoadLogoutRequest} from './auth/logout'
import {watchLoadArticleListRequest} from './article/getArticleList'

export default function* rootSaga() {
  yield all([
    watchLoadLoginRequest(),
    watchLoadLogoutRequest(),
    watchLoadArticleListRequest()
  ])
}