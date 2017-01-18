import createReducer from '../reducers'

export function injectAsyncReducer(store, isValid) {
  return function injectReducer(name, asyncReducer) {
    store.asyncReducers[name] = asyncReducer // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.asyncReducers))
  }
}

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store) {
  return {
    injectReducer: injectAsyncReducer(store, true)
  }
}
