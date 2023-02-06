import './App.css';
import React from 'react'
import Movies from './components/Movies'
import Details from './components/Details';
import { Route } from 'react-router-dom'
import { getAllMovies, getSingleMovie } from './apiCalls'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
          movies: [],
          errors: ''
    }
  }

  componentDidMount() {
    getAllMovies()
    .then((data) => {
      this.setState({
        movies: data.movies
      })
    })
        .catch((error) => {
          this.setState({
            error: error.message
          })
    })
  }

  render() {
    return (
      <main className="main-page">
        <div className='main-page-header'>
          <h1>Reel Laughs Movie Database</h1>
        </div>
        <React.Fragment>
          <Route exact path='/' render={() => <Movies movies={this.state.movies} />}></Route>
          <Route exact path='/:movieId' render={({ match }) => {
            return(<Details movieID={match.params.movieId}/>)
          }}
          ></Route>
        
        </React.Fragment>
        
         
        
        
        
      </main>
    );
  }
}

export default App;
