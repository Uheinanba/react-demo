import { combineReducers } from 'redux'

// douban movie top250
const entities = (state = {}, action) => {
  switch (action.type) {
    case 'TOP_SUCCESS':
      return action.list
    default:
      return state
  }
}

const rootReducer = combineReducers({
  entities
})

export default rootReducer
