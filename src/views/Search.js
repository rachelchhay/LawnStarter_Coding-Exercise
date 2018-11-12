import React, { Component } from "react";

class Search extends Component {
    render() {
        return(
            <div className="SearchContainer">
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
                            placeholder="Person name or movie title" 
                            onChange={this.props.handleChange} 
                            className="SearchInput"
                        /> 
                    </label>
                        <input 
                            type="submit" 
                            value="Search"
                            className="search-button" 
                        />
                </form>
            </div>
        );
    }
}

export default Search;