import React from "react";
import './Search.css'


class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchMovies: ''
        }
    }

    render() {
        return (
            <div>
                <form className="search-form">
                    <input />
                </form>
            </div>
        )
    }
}