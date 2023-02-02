import './App.css';
import React from 'react'
import Movies from './components/Movies'
import movieData from './movieData'

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
        <Movies movies={this.state.movies}/>
      </main>
    );
  }
}

export default App;
