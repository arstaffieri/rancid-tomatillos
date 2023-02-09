import React from "react";
import "./Search.css";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({value: event.target.value})
    this.props.searchMovies(this.state.value);
}

  handleClick = () => {
    this.setState({value: ""})
    this.props.searchMovies("");
  }

  render() {
    return (
      <section className='search-input-box'>
        <form className='search-input-field'>
            <input
            className='search-field'
            type='text'
            placeholder='SEARCH MOVIES'
            name='search bar'
            value={this.state.value}
            onChange={this.handleChange}
            />
            <button className="search-btn" onClick={this.handleClick}>clear</button>
        </form>
      </section>
    );
  }
}

export default Search;
