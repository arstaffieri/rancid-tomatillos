import React from "react";
import './Search.css'


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchMovies: null
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form 
                    className="search-form"
                    onSubmit={(event) => {
                    event.preventDefault();
                    this.props.movieSearch(this.state.searchMovies)
                }}
                >
                    <input 
                    className="search-input"
                    type='text'
                    name="searchMovies"
                    placeholder="Search Movies Here"
                    onChange={this.handleChange}
                    />
                    <button className="search-btn">Find</button>
                </form>
            </div>
        )
    }
}


export default Search