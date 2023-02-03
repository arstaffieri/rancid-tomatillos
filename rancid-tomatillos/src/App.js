import './App.css';
import React from 'react'
import Movies from './components/Movies'
import movieData from './movieData'
// import Details from './components/Details';
import { Route, Routes } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
          movies: [],
          errors: ''
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((response) => {
      if(!response.ok) {
        throw new Error("There has been a problem.")
      } else {
        return response.json()
      }
    })
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
        
         <Movies movies={this.state.movies}/>
        
        
        
      </main>
    );
  }
}

export default App;
