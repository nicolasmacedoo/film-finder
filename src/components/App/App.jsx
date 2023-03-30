import React from "react";
import './App.css';
import {getGenres, showRandomMovie} from '../../Util/Tmdb.js'
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: [],
      movie: ''
    };

    this.populateGenreDropdown = this.populateGenreDropdown.bind(this);
  }

  populateGenreDropdown() {
    getGenres().then(genres => {
      this.setState({
        genres,
      });
    });
  }

  searchRandomMovie(genre) {
    showRandomMovie(genre).then(movie => {
      console.log(movie)
      this.setState({
        movie
      });
    });
  }

  render()  {
    this.populateGenreDropdown()
    return (
      <div>
        <h1 className="appTitle">🍿Film Finder🍿</h1>
        <SearchBar genres={this.state.genres} />
      </div>
    )
  }
}

export default App
