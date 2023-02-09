import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <Link to='/' className="home-button-link">
                <button className='home-button' onClick={props.resetData}>Back To Home</button>
        </Link>
    )
}

export default Home