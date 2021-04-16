import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    console.log("movie data: ", movieData)
    return (
      movieData.map(movie => 
        <div key = {movie.title}>
        <MovieCard title = {movie.title} IMDBRating = {movie.IMDBRating} genres = {movie.genres} poster = {movie.poster}/>
        </div>
      )
    )
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
