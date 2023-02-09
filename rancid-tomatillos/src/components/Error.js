import React from 'react'
import pageError from '../page-error.gif'
import "./Error.css"
import { Link } from 'react-router-dom'

class Error extends React.Component {
    constructor() {
        super()
        this.state = {
            isClicked: false
        }
    }

    handleClick = () => {
        if(this.state.isClicked) {
            this.setState({isClicked: false})
            this.props.clicked(this.state.isClicked)
        } else {
            this.setState({isClicked: true})
            this.props.clicked(this.state.isClicked)
        }
        
    }



    render() {
        return ( 
        <div className='error-wrapper'>
            <img
            className='error-image'
            src={pageError}
            alt="404 Error"/>
            <Link to='/'>
                <div className='home-wrapper'>
                    <button className='home-button' onClick={this.handleClick}>Back To Home</button>
                </div>
            </Link>
        </div>
        )
    }
}

export default Error