import React, { Component } from "react";
import Search from './Search';
import SearchList from './SearchList';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        searchItem: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchItem: event.target.value
    });
  }

  search(peopleOrFilms, inputField) {
    const url = `https://swapi.co/api/${peopleOrFilms}/?search=${inputField}`;

    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log('Parsing failed', error))
  }

  handleSubmit(event) {
    event.preventDefault();

    let radioSelected = document.querySelector('input[name=search_item]:checked').value;

    this.search(radioSelected, this.state.searchItem);

    console.log('Input text: ' + this.state.searchItem);
    console.log('Radio selected: ' + radioSelected);    
  }


  render() {
    return (
      <div>
        <h1>Star Wars Movies & Characters Search</h1> 
        <Search
          selectedOption = {this.selectedOption}
          handleSubmit = {this.handleSubmit}
          handleChange = {this.handleChange}
        />
        <SearchList />
      </div>
    )
  }
}

export default Home;
