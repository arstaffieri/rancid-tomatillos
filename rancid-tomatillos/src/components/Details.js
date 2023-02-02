import React from 'react'
import './Details.css'
import movieData from '../movieData.js'

class Details extends React.Component {
    constructor() {
        super()
        this.state = {
            movie: movieData
        }

    }
    render() {
        return(
            <div>
                <p>Hi</p>
            </div>
        )
    }
       
   
}

export default Details