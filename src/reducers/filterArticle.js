import {FIND_ARTICLE} from '../constants/types'

const initialState = ''

const filterArticle = (state = initialState, action) => {
  switch(action.type) {
    case FIND_ARTICLE:
      return action.data
    default:
      return state
  }
}
export default filterArticle