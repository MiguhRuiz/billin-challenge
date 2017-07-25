import { combineReducers } from 'redux'
import { GET_ARTICLES, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE, 
        GET_ARTICLE, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAILURE,
        DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE,
        ADD_ARTICLE, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_FAILURE } from './actions'

const INITIAL_STATE = {
    articlesList: { articles: [], error: null, loading: false },
    currentArticle: { article: [], error: null, loading: false }
}

function ArticlesReducer(state=INITIAL_STATE, action) {
    let error
    switch(action.type) {
        case GET_ARTICLES:
            return {...state, articlesList: {articles: [], error: null, loading: true} }
        case GET_ARTICLES_SUCCESS:
            return {...state, articlesList: {articles: action.payload, error: null, loading: false} }
        case GET_ARTICLES_FAILURE:
            error = action.payload.data || { message: action.payload.message }
            return {...state, articlesList: {articles: [], error: error, loading: false}}
        case GET_ARTICLE:
            return {...state, currentArticle: {article: [], error: null, loading: true} }
        case GET_ARTICLE_SUCCESS:
            return {...state, currentArticle: {article: action.payload, error: null, loading: false} }
        case GET_ARTICLE_FAILURE:
            error = action.payload.data || { message: action.payload.message }
            return {...state, currentArticle: {article: [], error: error, loading: false}}
        case DELETE_ARTICLE:
            return {...state, currentArticle: {article: [], error: null, loading: true}}
        case DELETE_ARTICLE_SUCCESS:
            return {...state, currentArticle: {article: [], error: null, loading: false}}
        case DELETE_ARTICLE_FAILURE:
            error = action.payload.data || {message: action.payload.message}
            return {...state, currentArticle: {article: [], error: error, loading: false}}
        case ADD_ARTICLE:
            return {...state, articlesList: {articles: state.articlesList.articles, error: null, loading: true}}
        case ADD_ARTICLE_SUCCESS:
            return {...state, articlesList: { articles: state.articlesList.articles.concat(action.payload.data.addArticle), error: null, loading: false }}
        case ADD_ARTICLE_FAILURE:
            error = action.payload.data || {message: action.payload.message}
            return {...state, articlesList: {articles: state.articlesList.articles, error: error, loading: false}}
        default:
            return state
    }
}

const RootReducer = combineReducers({
    articles: ArticlesReducer
})

export default RootReducer