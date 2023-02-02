import './App.css';
import React from 'react'
import movieData from './movieData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
          movies: [],
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
