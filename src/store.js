import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const p = applyMiddleware(promise)
const t = applyMiddleware(thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            p,
            t
        )
    )
}