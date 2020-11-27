import { put, takeEvery } from 'redux-saga/effects'
import { FETCH_ARTICLE_TYPES } from '../../constants/types'
import { fetchArticlesResult, fetchArticlesError } from '../../actions/article/article'

export function* getArticleList(action) {
  try{
    if(action.params.user.name === 'admin' && action.params.user.password === '123'){
      const data = {
        name: action.params.user.name,
        role: 'admin'
      }
      yield put(fetchArticlesResult(data));
      const user = JSON.stringify(data);
      localStorage.setItem("user", user);
    } else {
      const data = "Неверный логин или пароль.";
      yield put(fetchArticlesError(data));
    }
  } catch (error) {
    // const data = {code: 500, userMessage: 'Internal Server Error'};
    const data = error
    yield put(fetchArticlesError(data));
  }
}

export function* watchLoadArticleListRequest() {
  yield takeEvery(FETCH_ARTICLE_TYPES.REQUEST, getArticleList);
}