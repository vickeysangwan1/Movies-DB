import React, { useState, useEffect } from "react";
import "../styles/Movies.css";
import data from "./Movies-data";

export const API_ENDPOINT = `https://api.themoviedb.org/?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
const fetchMovies = `https://api.themoviedb.org/3/movie/popular?api_key=91372558fe90a04a5a85363a78b74fba`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const newMovies = async () => {
    const response = await fetch(fetchMovies);
    const data = await response.json();
    setMovies(data.results);
  };

  // useEffect(() => {
  //   newMovies();
  // }, []);

  return (
    <section className="movies">
      <div className="title">
        <h1>what's popular</h1>
        <div className="underline"></div>
      </div>
      <div className="movies-container">
        {data.map((movie) => {
          return (
            <div className="movie" key={movie.id}>
              <div className="image">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="movie-info">
                <h3>Rating : {movie.vote_average}</h3>
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
