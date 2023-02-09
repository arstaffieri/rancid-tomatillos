import React from "react";
import "./Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMovie: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.searchMovies(this.state.inputMovie);
  };

  handleClick = () => {
    this.setState({ value: "" });
    console.log(this.state.inputMovie);
    this.props.searchMovies("");
  };

  render() {
    return (
      <section className="input-container">
        <form className="input-box">
          <input
            className="search-box"
            type="text"
            placeholder="SEARCH MOVIES"
            name="inputMovie"
            value={this.state.inputMovie}
            onChange={this.handleChange}
          />
          <button className="search-btn" onClick={this.handleClick}>
            clear
          </button>
        </form>
      </section>
    );
  }
}

export default Search;
