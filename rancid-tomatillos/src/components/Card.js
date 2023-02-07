import React from "react";
import './Card.css'
import { Link } from "react-router-dom";



const Card = ({ id, title, poster }) => {
    return (
        <Link to={`/movies/${id}`} key={id} className="poster-container">
            <img 
            className="poster-card"
            src={poster}
            alt={title}
            key={id}
            />
        </Link>

        
    )
}



export default Card