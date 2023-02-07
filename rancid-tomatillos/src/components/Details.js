import React from 'react'
import { Link } from 'react-router-dom'
import './Details.css'
import { getSingleMovie } from '../apiCalls'
import * as dayjs from "dayjs";

class Details extends React.Component {
    constructor() {
        super()
        this.state = {
            singleMovie: {},
            error: ''
        }

    }
    
    componentDidMount() {
        getSingleMovie(this.props.movieID)
        .then((data) => {
            this.setState({
                singleMovie: data.movie
            })
        })
        .catch((error) => {
            this.setState({
              error: error.message
            })
        
    })
    
}
    changeReview = () => {
        let stars = ''
        for(let i = 0; i < this.state.singleMovie.average_rating; i++) {
            stars += '🌟'
        }
        return stars
    }

    render() {
        const formatter = new Intl.NumberFormat('en-US', {
            style:'currency',
            currency:'USD'
        })
        return(
            <div className="single-movie-details">
                <section className="single-movie-image">
                    <h2 className='single-movie-title'>{this.state.singleMovie.title}</h2>
                    <img className="movie-image"
                        src={this.state.singleMovie.backdrop_path} alt={this.state.singleMovie.title}
                    />
                </section>
                <section className='single-movie-info'>
                    <p>{this.state.singleMovie.overview}</p>
                    <p>Average Rating: {this.changeReview()} out of 10 Stars</p>
                    <p>Release Date: {dayjs(this.state.singleMovie.release_date).format('MM/DD/YYYY')}</p>
                    <p>Run Time: {this.state.singleMovie.runtime} Minutes</p>
                    {this.state.singleMovie.budget <= 0 ? (
                        <p>Budget: No Budget Info</p>
                    ):(<p>Budget: {formatter.format(this.state.singleMovie.budget)}</p>
                    )}
                    {this.state.singleMovie.revenue <= 0 ? (
                        <p>Revenue: No Revenue Info</p>
                    ): (<p>Revenue: {formatter.format(this.state.singleMovie.revenue)}</p>)
                }
                    
                </section>
                <Link to='/'>
                    <div className='button-wrapper'>
                        <button className='home-button'>Back To Home</button>
                    </div>
                </Link>
            </div>

        )
    }
       
   
}

export default Details