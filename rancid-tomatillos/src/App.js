import "./App.css";
import React from "react";
import Movies from "./components/Movies";
import Details from "./components/Details";
import Search from "./components/Search";
import { Route, Switch } from "react-router-dom";
import { getAllMovies } from "./apiCalls";
import loadingSpinner from "./loading.gif";
import Error from "./components/Error";


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
          searchedMovie: '',
          isLoading: false
        });
      })
      .catch((error) => {
        this.setState({
          errors: error.message,
        });
      });
  }

  searchBar = (value) => {
    this.setState({searchedMovie: value})
  }

  render() {
    return (
      <main className="main-page">
        <div className="main-page-header">
          <h1>Reel Laughs Movie Database</h1>
        </div>
        <Search movieSearch={this.searchBar}/>
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
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Movies movies={this.state.movies} movieSearch={this.state.searchedMovie} />}
          ></Route>
          <Route
            exact
            path="/movies/:movieId"
            render={({ match }) => {
              return <Details movieID={match.params.movieId} />;
            }}
          ></Route>
          <Route exact path="/*" render={() => <Error />}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
