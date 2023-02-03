import React from "react";
import './Movies.css'
import Card from "./Card";



const Movies = (props) => {
    const moviePoster = props.movies.map((movies) => {
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



