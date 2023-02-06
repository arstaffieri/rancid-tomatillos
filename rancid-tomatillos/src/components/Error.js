import React from 'react'
import pageError from '../page-error.gif'
import "./Error.css"

const Error = () => {
    return( 
    <div className='error-wrapper'>
        <img
        className='error-image'
        src={pageError}
        alt="404 Error"/>
    </div>)
}

export default Error