import React from 'react'
import './Details.css'

class Details extends React.Component {
    constructor() {
        super()
        this.state = {
            singleMovie: {},
            error: ''
        }

    }
    
    componentDidMount() {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieID}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error("There has been a problem.")
              } else {
                return response.json()
              }
            })
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

    render() {
        return(
            <div className="single-movie-details">
                <section className="single-movie-image">
                    <img 
                        src={this.state.singleMovie.backdrop_path} alt={this.state.singleMovie.title}
                    />
                    <h2>{this.state.singleMovie.title}</h2>
                </section>
                <section className='single-movie-info'>
                    <p>{this.state.singleMovie.overview}</p>
                    <p>Average Rating: {this.state.singleMovie.average_rating}</p>
                    <p>Release Date: {this.state.singleMovie.release_date}</p>
                    <p>Run Time: {this.state.singleMovie.runtime}</p>
                    <p>Budget:{this.state.singleMovie.budget}</p>
                    <p>Revenue: {this.state.singleMovie.revenue}</p>
                    <p>Genre: {this.state.singleMovie.genre}</p>
                </section>
                
            </div>
        )
    }
       
   
}

export default Details