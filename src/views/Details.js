import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class Details extends Component {
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
            return <Redirect to='/' />
        }
    }


    render() {
        return (
            <div>
                <p>Details...</p>
                {this.renderRedirect()}
                <button className="back-to-search" onClick={this.setRedirect}>Back To Search</button>
            </div>
        )
    }
}

export default Details;