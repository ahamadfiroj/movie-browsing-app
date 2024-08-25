// src/api.js
const ACCESS_TOKEN = 'a847c715e30c4ebb4e6f287c34c6a961'; // Replace with your actual Vimeo access token
const BASE_URL = 'https://api.vimeo.com';

// Function to fetch movies or videos
export const fetchMovies = async (query, page=1) => {
  const response = await fetch(`${BASE_URL}/videos?query=${encodeURIComponent(query.genre || 'latest')}&page=${encodeURIComponent(page)}&per_page=${encodeURIComponent(20)}`, {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await response.json();
  return data.data; // Adjust based on the actual response structure from Vimeo
};

// Function to fetch movie or video details
export const fetchMovieDetails = async (videoId) => {
  const response = await fetch(`${BASE_URL}/videos/${videoId}`, {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }

  const data = await response.json();
  return data; // Adjust based on the actual response structure from Vimeo
};



export const fetchGenres = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return null;
  }
};

