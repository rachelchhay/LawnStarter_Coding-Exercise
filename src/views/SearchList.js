import React, { Component } from "react";
import SearchItem from "./SearchItem";

class SearchList extends Component {
    render() {

        return (
            <div className="MatchesBG">
                <h2>Results</h2>
                <hr/>
                {this.props.results.map((result, i) => <SearchItem key={i} result={result} radioSelected={this.props.radioSelected} />)}
            </div>
        )
    }
}

export default SearchList;