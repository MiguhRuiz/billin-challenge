import request from './request'
import { ARTICLES_QUERY, ARTICLE_QUERY, DELETE_ARTICLE_QUERY, ADD_ARTICLE_QUERY } from './queries'

export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS'
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE'
export const GET_ARTICLE = 'GET_ARTICLE'
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS'
export const GET_ARTICLE_FAILURE = 'GET_ARTICLE_FAILURE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS'
export const DELETE_ARTICLE_FAILURE = 'DELETE_ARTICLE_FAILURE'
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS'
export const ADD_ARTICLE_FAILURE = 'ADD_ARTICLE_FAILURE'

export function getArticles() {
    return (dispatch, getState) => {
        request(ARTICLES_QUERY)
            .then(res => dispatch(getArticlesSuccess(res)))
            .catch(err => dispatch(getArticlesFailure(err)))
    }
}

export function getArticlesSuccess(data) {
    return {
        type: GET_ARTICLES_SUCCESS,
        payload: data.data.articles
    }
}

export function getArticlesFailure(data) {
    return {
        type: GET_ARTICLES_FAILURE,
        payload: data
    }
}

export function getArticle(id) {
    return(dispatch, getState) => {
        request(ARTICLE_QUERY)
            .then(result => result.data.articles.filter(article => article.id === id))
            .then(article => dispatch(getArticleSuccess(article)))
            .catch(err => dispatch(getArticleFailure(err)))
    }
}

export function getArticleSuccess(data) {
    return {
        type: GET_ARTICLE_SUCCESS,
        payload: data
    }
}

export function getArticleFailure(data) {
    return {
        type: GET_ARTICLE_FAILURE,
        payload: data
    }
}

export function deleteArticle(id) {
    return(dispatch, getState) => {
        request(DELETE_ARTICLE_QUERY(id))
            .then(res => res.json())
            .then(data => dispatch(deleteArticleSuccess(data)))
            .catch(err => dispatch(deleteArticleFailure(err)))
    }
}

export function deleteArticleSuccess(data) {
    return {
        type: DELETE_ARTICLE_SUCCESS,
        payload: data
    }
}

export function deleteArticleFailure(data) {
    return {
        type: DELETE_ARTICLE_FAILURE,
        payload: data
    }
}

export function addArticle(article) {
    return(dispatch, getState) => {
        request(ADD_ARTICLE_QUERY(article))
            .then(data => dispatch(addArticleSuccess(data)))
            .catch(err => dispatch(addArticleFailure(err)))
    }
}

export function addArticleSuccess(data) {
    return {
        type: ADD_ARTICLE_SUCCESS,
        payload: data
    }
}

export function addArticleFailure(data) {
    return {
        type: ADD_ARTICLE_FAILURE,
        payload: data
    }
}