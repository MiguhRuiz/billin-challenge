import request from './request'
import { ARTICLES_QUERY } from './queries'

export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS'
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE'
export const GET_ARTICLE = 'GET_ARTICLE'
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS'
export const GET_ARTICLE_FAILURE = 'GET_ARTICLE_FAILURE'

export function getArticles() {
    return (dispatch, getState) => {
        request(ARTICLES_QUERY)
            .then(res => dispatch(getArticlesSuccess(res)))
            .catch(err => dispatch(getArticleFailure(err)))
    }
}

export function getArticlesSuccess(data) {
    return {
        type: GET_ARTICLES_SUCCESS,
        payload: data.data.articles
    }
}

export function getArticleFailure(data) {
    return {
        type: GET_ARTICLES_FAILURE,
        payload: data
    }
}

export function getArticle(id) {
    return(dispatch, getState) => {
        request(ARTICLES_QUERY)
            .then(res => dispatch(getArticleSuccess(res)))
            .then(articles => articles.filter(article => article.id === id))
            .catch(err => dispatch(getArticlFailure(err)))
    }
}

export function getArticleSuccess(data) {
    return {
        type: GET_ARTICLE_SUCCESS,
        payload: data
    }
}

export function getArticlFailure(data) {
    return {
        type: GET_ARTICLE_FAILURE,
        payload: data
    }
}