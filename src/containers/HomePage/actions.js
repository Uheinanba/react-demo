import * as types from './constants'

// 豆瓣电影 top250
export const addToMovieList = movie => ({
  type: types.FETCHT_MOVIE_SUCCESS,
  movie
})

export const fetchMovies = (topItem = 'top250') => (dispatch, getState) => {
  window.fetch(`https://api.douban.com/v2/movie/${topItem}`, {mode: 'no-cors'})
    .then((response) => {
      dispatch(addToMovieList(response))
    })
}
