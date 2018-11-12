import React, { Component } from "react";
import Search from './Search';
import SearchList from './SearchList';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        searchItem: '',
        radioSelected: '',
        results: []
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
    .then(parsedJSON => {
      let results = Array.from(parsedJSON.results);
      this.setState({
        // need to loop through this
        results
      });
      console.log(Array.from(parsedJSON.results));
      console.log('Results from search: ' + this.state.results)
    })
    .catch(error => console.log('Parsing failed', error))
  }

  handleSubmit(event) {
    event.preventDefault();

    let radioSelected = document.querySelector('input[name=search_item]:checked').value;
    this.setState({
      radioSelected
    });    

    this.search(radioSelected, this.state.searchItem);

    console.log('Input text: ' + this.state.searchItem);
    console.log('Radio selected: ' + radioSelected);    
  }


  render() {
    return (
      <div className="main">
        <header>Star Wars Movies & Characters Search</header> 

        <div className="search">
            <Search
              selectedOption = {this.selectedOption}
              handleSubmit = {this.handleSubmit}
              handleChange = {this.handleChange}
            />
            <SearchList 
              results = {this.state.results}
              radioSelected = {this.state.radioSelected}
            />
        </div>
      </div>
    )
  }
}

export default Home;
