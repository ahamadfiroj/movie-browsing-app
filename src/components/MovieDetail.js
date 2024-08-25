// src/components/MovieDetail.js
import React from 'react';
import { MovieDetailContainer, PlayButton } from '../styles/MovieDetailStyles';

const MovieDetail = ({ movie }) => {
  return (
    <MovieDetailContainer>
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
      <PlayButton onClick={() => window.open(movie.link, '_blank')}>Play Movie</PlayButton>
    </MovieDetailContainer>
  );
};

export default MovieDetail;
