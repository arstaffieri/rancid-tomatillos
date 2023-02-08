import React from "react";
import "./Search.css";
// import { Link } from "react-router-dom";
import Home from "./Home";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovies: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  resetInput = () => {
    this.props.resetMovies();
    this.setState({ searchMovies: "" });
  };

  render() {
    console.log(this.state.searchMovies)
    return (
      <div>
        <form
          className="search-form"
          onSubmit={(event) => {
            event.preventDefault();
            this.props.movieSearch(this.state.searchMovies);
          }}
        >
          <input
            className="search-input"
            type="text"
            name="searchMovies"
            value={this.state.searchMovies}
            placeholder="Search Movies Here"
            onChange={this.handleChange}
          />
          <button className="search-btn">Find</button>
          {this.props.singleMovie.length > 0 &&
            <Home resetData={this.resetInput} movieData={this.props.singleMovie}/>
          }
        </form>
      </div>
    );
  }
}

export default Search;
