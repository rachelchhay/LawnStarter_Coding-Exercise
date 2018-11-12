import React, { Component } from "react";

class Search extends Component {
    render() {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <p>
                        What are you searching for? 
                    </p>

                    <label>
                        <input 
                            type="radio" 
                            name="search_item" 
                            value="people"
                            /> 
                            People
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="search_item" 
                            value="films" 
                            /> 
                            Movies 
                    </label>
                    <label>
                        <input 
                            type="text" 
                            placeholder="top level people/movie selection" 
                            onChange={this.props.handleChange} 
                        /> 
                    </label>
                        <input 
                            type="submit" 
                            value="Submit" 
                        />
                </form>
            </div>
        );
    }
}

export default Search;