// import { combineReducers } from 'redux'

// douban movie
const homeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCHT_MOVIE_SUCCESS':
      return action.movie
    default:
      return state
  }
}

/* const rootReducer = combineReducers({
  movies
}) */

export default homeReducer
