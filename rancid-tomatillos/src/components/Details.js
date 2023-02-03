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
            <div>
                console.log(this.state.singleMovie)
            </div>
        )
    }
       
   
}

export default Details