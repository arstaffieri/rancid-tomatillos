import React from "react";
import './Movies.css'
import Card from "./Card";



const Movies = (props) => {
    console.log(props)

    const moviePoster = props.movies.movies.map((movies) => {
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
        <div>
            {moviePoster}
        </div>
    )
}


export default Movies



