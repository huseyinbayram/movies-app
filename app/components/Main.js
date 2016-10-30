import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

const MovieList = props => {
  const movies = props.movies;
  const listItems = movies.map((movie, i) => (
      <a href={movie} key={i} className="list-group-item">
        <h4 className="list-group-item-heading">{movie}</h4>
        <p className="list-group-item-text">{movie}</p>
      </a>
    )
  )
  return (
    <div className="list-group">
      {listItems}
    </div>
  )
}

class Main extends Component {
  constructor() {
    super()
    this.state = {
      movieList: [
        'http://www.imdb.com/title/tt0118799/'
      ]
    }
    this.handleAddMovie = this.handleAddMovie.bind(this)
  }

  handleAddMovie(e) {
    e.preventDefault()
    const val = this.refs.movieInput.value
    if (val) {
      let newArray = this.state.movieList.slice()
      newArray.push(val);
      this.setState({
        movieList: newArray
      })
    }
  }

  render() {
    return (
      <div className='container-narrow'>
      <form className='form-horizontal' onSubmit={this.handleAddMovie}>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='Imdb address' ref='movieInput'/>
          <span className='input-group-btn'>
            <button className='btn btn-default' type='submit'>Add</button>
          </span>
        </div>
        </form>
        <br/>
        <MovieList movies={this.state.movieList} />
      </div>
    )
  }
}

export default Main
