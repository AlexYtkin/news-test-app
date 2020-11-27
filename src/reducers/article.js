import {
  FETCH_ARTICLE_TYPES,
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  APPROVE_ARTICLE
} from '../constants/types'
import {initArticles} from '../constants/iinitArticles'

const articles = JSON.parse(localStorage.getItem('articles'));

const initialState = {
  articles: articles || initArticles,
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
    case FETCH_ARTICLE_TYPES.RESULT:
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
    case ADD_ARTICLE:
      return {
        ...state,
        loading: false,
        articles: [action.data, ...state.articles]
      }
    case REMOVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(article => article.id !== action.data)
      }
    case APPROVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(article => article.id === action.data ? { ...article, approved: true} : article)
      }
    default:
      return state;
  }
}

export default article;