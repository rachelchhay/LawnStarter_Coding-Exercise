import React, { Component } from "react";

class Search extends Component {
    render() {
        return(
            <div>
                <form>
                    <label>
                        What are you searching for? <br/>
                        <input type="radio" name="search_item" value="people" /> People
                        <input type="radio" name="search_item" value="movies" /> Movies <br/>
                        <input type="text" name="search_text" placeholder="top level people/movie selection" /> <br/>
                        <input type="submit" value="Submit" />
                    </label>
                </form>
            </div>
        )
    }
}

export default Search;