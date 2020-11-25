import {combineReducers} from 'redux'
import auth from '../reducers/auth'
import article from './article'

const rootReducer = combineReducers({
  auth,
  article
})
export default rootReducer