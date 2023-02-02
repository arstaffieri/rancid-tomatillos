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
          movies: movieData,
          errors: ''
    }
  }
  render() {
    return (
      <main className="main-page">
        <div className='main-page-header'>
          <h1>Reel Laughs Movie Database</h1>
        </div>
        <Routes>
          <Route exact path="/" render={() => <Movies movies={this.state.movies} />}/>
          {/* <Route 
          exact path='/id'
          render={() => (
            <Details />
          )}
          /> */}
        </Routes>
        
      </main>
    );
  }
}

export default App;
