import React from "react";
import "./Search.css";
import PropTypes from "prop-types";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value }, () => {
      this.props.searchMovies(this.state.searchTerm);
    });
  };

  handleClick = () => {
    this.setState({ searchTerm: "" });
    this.props.searchMovies("");
  };

  render() {
    return (
      <section className="search-input-box">
        <form className="search-input-form">
          <input
            className="search-form"
            type="text"
            placeholder="SEARCH MOVIES"

            value={this.state.searchTerm}
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

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  movies: PropTypes.any.isRequired
};
