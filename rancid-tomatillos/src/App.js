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
      <main className="App">
      </main>
    );
  }
}

export default App;
