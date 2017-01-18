import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createReducer from '../reducers'

const configureStore = (initialState = {}, history) => {
  const middlewares = [
    thunk,
    routerMiddleware(history)
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers)
  )

  return store
}

export default configureStore
