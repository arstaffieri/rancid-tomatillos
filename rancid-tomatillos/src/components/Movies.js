import React from "react";
import './Movies.css'
import Card from "./Card";



const Movies = (props) => {
    let globalMovie;
    if(props.movieSearch) {
        globalMovie = props.movies.filter((movie) => movie.title.toLowerCase().includes(props.movieSearch))
    } else {
        globalMovie = props.movies
    }

    const moviePoster = globalMovie.map((movies) => {
        return (
            <Card 
            title={movies.title}
            poster={movies.poster_path}
            id={movies.id}
            key={movies.id}
            />
        )
    }) 
    return (
        <div className="movie-container">
            {moviePoster}
        </div>
    )
}


export default Movies



