import {FETCH_ARTICLE_TYPES} from '../constants/types'

const articles = JSON.parse(localStorage.getItem('articles'));

const news = {
  title: '',
  text: '',
  createdDate: new Date().toLocaleDateString()
}

const initialState = {
  articles: articles || [],
  error: null,
  loading: null
}

function article(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLE_TYPES.REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_ARTICLE_TYPES.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: action.data
      };
    case FETCH_ARTICLE_TYPES.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default article;