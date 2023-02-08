import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <Link to='/'>
            <div className='home-wrapper'>
                <button className='home-button' onClick={props.resetData}>Back To Home</button>
            </div>
        </Link>
    )
}

export default Home