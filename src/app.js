import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import createRoutes from './routes'
import App from './containers/App/index'
import Root from './root/Root'

const initialState = {}
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

const rootRoute = {
  component: App,
  childRoutes: createRoutes(store)
}
console.log('test')

render(
  <Root store={store} history={history} routes={rootRoute} />,
  document.getElementById('root')
)
