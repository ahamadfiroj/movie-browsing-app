// src/pages/MovieDetailPage.js
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import { fetchMovieDetails } from '../api';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchMovieDetail = useCallback(async () => {
    try {
      const response = await fetchMovieDetails(id);
      setMovie(response);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchMovieDetail();
  }, [fetchMovieDetail]);

  return (
    <div>
      {movie ? <MovieDetail movie={movie} /> : <p>Loading...</p>}
    </div>
  );
};

export default MovieDetailPage;
