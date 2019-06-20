import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux'

import authentificationReducer from './modules/authentification/duck'

const rootReducer = combineReducers({
  example: authentificationReducer,
})


// Common middleware (redux-thunk, redux-saga, ...).
const middleware = []

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)


export default store
