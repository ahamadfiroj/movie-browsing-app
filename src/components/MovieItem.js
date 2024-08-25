// src/components/MovieItem.js
import React from 'react';
import { MovieItemContainer, MovieTitle } from '../styles/MovieItemStyles';

const MovieItem = ({ movie, onClick }) => {
  return (
    <MovieItemContainer onClick={() => onClick(movie)}>
      <img src={movie.pictures.sizes[0].link} alt={movie.name} />
      <MovieTitle>{movie.name}</MovieTitle>
    </MovieItemContainer>
  );
};

export default MovieItem;
