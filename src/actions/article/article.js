import {
  FETCH_ARTICLE_TYPES,
  FIND_ARTICLE,
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  APPROVE_ARTICLE
} from '../../constants/types'

export function fetchArticlesRequest(params){
  return {
    type: FETCH_ARTICLE_TYPES.REQUEST,
    params
  }
}

export function fetchArticlesResult(data){
  return {
    type: FETCH_ARTICLE_TYPES.SUCCESS,
    data
  }
}

export function fetchArticlesError(error) {
  return{
    type: FETCH_ARTICLE_TYPES.ERROR,
    error
  }
}

export function findArticle(data) {
  return {
    type: FIND_ARTICLE,
    data
  }
}

export function addArticle(data) {
  return {
    type: ADD_ARTICLE,
    data
  }
}

export function removeArticle(data) {
  return {
    type: REMOVE_ARTICLE,
    data
  }
}

export function approveArticle(data) {
  return {
    type: APPROVE_ARTICLE,
    data
  }
}