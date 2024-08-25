// src/pages/HomePage.js
import React, { useEffect, useState, useCallback } from 'react';
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';
import { fetchMovies } from '../api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMoviesWithFilters = useCallback(async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetchMovies(filters, pageNumber);
      setMovies((prev) => [...prev, ...response]);
      setPage(pageNumber);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchMoviesWithFilters(1);
  }, [filters, fetchMoviesWithFilters]);

  const handleApplyFilter = (filterData) => {
    setFilters(filterData);
    setMovies([]); // Clear current movies when filters are applied
    fetchMoviesWithFilters(1); // Fetch first page with new filters
  };

  const handleLoadMore = () => {
    fetchMoviesWithFilters(page + 1); // Fetch next page
  };

  const handleMovieClick = (movie) => {
    window.location.href = `/movies/${movie.uri.split('/').pop()}`;
  };

  return (
    <div>
      <Filter onApplyFilter={handleApplyFilter} />
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
      <button onClick={handleLoadMore} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default HomePage;
