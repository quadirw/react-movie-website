import React from 'react'
import { useState , useEffect } from 'react';

async function FetchMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
       fetch('https://www.omdbapi.com/?i=tt3896198&apikey=8ecfc63b&s=batman')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    }, []);

  return (
    <div>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
          </li>
        ))}
      </ul>

    </div>
  )
}

export default FetchMovies;
