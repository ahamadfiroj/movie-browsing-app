// src/components/MovieList.js
import React from 'react';
import MovieItem from './MovieItem';
import { MovieListContainer } from '../styles/MovieListStyles';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <MovieListContainer>
      {movies.map((movie) => (
        <MovieItem key={movie.uri} movie={movie} onClick={onMovieClick} />
      ))}
    </MovieListContainer>
  );
};

export default MovieList;
