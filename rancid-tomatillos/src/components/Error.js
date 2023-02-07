import React from 'react'
import pageError from '../page-error.gif'
import "./Error.css"
import { Link } from 'react-router-dom'

const Error = () => {
    return ( 
    <div className='error-wrapper'>
        <img
        className='error-image'
        src={pageError}
        alt="404 Error"/>
        <Link to='/'>
            <div className='home-wrapper'>
                <button className='home-button'>Back To Home</button>
            </div>
        </Link>
    </div>
    )
}

export default Error