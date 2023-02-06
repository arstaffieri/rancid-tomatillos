import React from "react";
import './Card.css'
import { NavLink } from "react-router-dom";



const Card = ({ id, title, poster }) => {
    return (
        <NavLink to={`/movies/${id}`} key={id} className="poster-container">
            <img 
            className="poster-card"
            src={poster}
            alt={title}
            key={id}
            />
        </NavLink>

        
    )
}



export default Card