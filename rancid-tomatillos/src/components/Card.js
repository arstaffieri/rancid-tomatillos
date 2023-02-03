import React from "react";
import './Card.css'



const Card = ({ title, poster, id }) => {
    return (
        
            <img 
            className="poster-card"
            src={poster}
            alt={title}
            key={id}
        />
        
    )
}



export default Card