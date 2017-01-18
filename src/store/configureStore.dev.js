import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import createReducer from '../reducers'
import DevTools from '../utils/DevTools'

const configureStore = (initialState = {}, history) => {
  // Create the store with two middlewares
  // 1. thunkMiddleware: Makes redux-thunk
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    thunk,
    routerMiddleware(history),
    createLogger()
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers, DevTools.instrument())
  )

  // Extensions
  store.asyncReducers = {} // Async reducer registry
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
