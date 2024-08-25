// src/components/Filter.js
import React, { useEffect, useState } from 'react';
import { FilterContainer, FilterButton } from '../styles/FilterStyles';
import { fetchGenres } from '../api';

const Filter = ({ onApplyFilter }) => {
  const [filters, setFilters] = useState({
    genre: '',
    year: '',
    rating: ''
  });
  useEffect(()=>{
    fetchGenres()
  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilter = () => {
    onApplyFilter(filters);
  };

  return (
    <FilterContainer>
      <div>
        <label>
          Genre:
          <input name="genre" value={filters.genre} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Year:
          <input name="year" value={filters.year} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Rating:
          <input name="rating" value={filters.rating} onChange={handleChange} />
        </label>
      </div>
      <FilterButton onClick={handleApplyFilter}>Apply Filters</FilterButton>
    </FilterContainer>
  );
};

export default Filter;
