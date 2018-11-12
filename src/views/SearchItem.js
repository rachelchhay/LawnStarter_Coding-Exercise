import React, { Component } from "react";
import Details from "./Details";
import { Redirect } from 'react-router-dom';

class SearchItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }    
    }


    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/details' />
        }
    }

    printMovieOrPeople(movieOrPeople) {
        if (movieOrPeople === 'people') {
            return <h3>{this.props.result.name}</h3>
        } else {
            return <h3>{this.props.result.title}</h3>
        }
    }


    render() {
        
        return (
            <div className="results">
                {this.printMovieOrPeople(this.props.radioSelected)}
                {this.renderRedirect()}
                <button className="search-button see-details" onClick={this.setRedirect}>
                See Details</button>
                <hr className="results-hr"/>
            </div>
        )
    }
}

export default SearchItem;