import {combineReducers} from 'redux'
import auth from '../reducers/auth'
import article from './article'
import filterArticle from './filterArticle'

const rootReducer = combineReducers({
  auth,
  article,
  filterArticle
})
export default rootReducer