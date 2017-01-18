import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from './actions'

class HomePage extends Component {
  handleDismissClick = e => {
    this.props.fetchMovies()
  }

  render() {
    let movies = this.props.movies
    return (
      <div>
        <div onClick={this.handleDismissClick}>HomePage</div>
        <p>{movies.type}</p>
      </div>
    )
  }
}

HomePage.propTypes = {
  movies: React.PropTypes.object.isRequired,
  fetchMovies: React.PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.home
  }
}

export default connect(mapStateToProps, {
  fetchMovies
})(HomePage)
