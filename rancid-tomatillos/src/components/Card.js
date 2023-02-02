import React from "react";
import './Card.css'
import { Link } from 'react-router-dom'


const Card = ({ title, poster, id }) => {
    return (
        <Link to={id} key={id}>
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