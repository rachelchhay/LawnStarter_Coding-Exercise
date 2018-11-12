import React, { Component } from "react";
import Search from './Search';
import SearchList from './SearchList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Star Wars Movies & Characters Search</h1> 
        <Search />
        <SearchList />
      </div>
    )
  }
}

export default Home;
