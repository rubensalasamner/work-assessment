import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/searchbar';

const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

class App extends Component {

  constructor() {
    super();
    
    this.state = {
        
    }
  }
  
  searchByInput = (e) => {
    console.log(API_KEY);
    e.preventDefault();
    console.log(e.target.search.value);
    const searchQuery = e.target.search.value;
    https://api.themoviedb.org/3/search/movie?api_key=45499dda27fbc45918728b51e4e82810&query=spiderman
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Searchbar search={this.searchByInput}></Searchbar>
        </header>
      </div>
    );
  }
}

export default App;