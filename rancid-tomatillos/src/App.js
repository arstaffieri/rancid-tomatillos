import "./App.css";
import React from "react";
import Movies from "./components/Movies";
import Details from "./components/Details";
import { Route } from "react-router-dom";
import { getAllMovies } from "./apiCalls";
import loadingSpinner from "./loading.gif";
// import Error from "./components/Error";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      errors: "",
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getAllMovies()
      .then((data) => {
        this.setState({
          movies: data.movies,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          errors: error.message,
        });
      });
  }

  render() {
    return (
      <main className="main-page">
        <div className="main-page-header">
          <h1>Reel Laughs Movie Database</h1>
        </div>
        {this.state.errors && (
          <h2 className="error-message">{this.state.errors}</h2>
        )}
        {this.state.isLoading && (
          <div className="loading-container">
            <img
              className="loading-message"
              src={loadingSpinner}
              alt="Loading"
            />
          </div>
        )}
        <React.Fragment>
          <Route
            exact
            path="/"
            render={() => <Movies movies={this.state.movies} />}
          ></Route>
          <Route
            exact
            path="/movies/:movieId"
            render={({ match }) => {
              return <Details movieID={match.params.movieId} />;
            }}
          ></Route>
          {/* <Route exact path="/*" render={() => <Error />}></Route> */}
        </React.Fragment>
      </main>
    );
  }
}

export default App;
