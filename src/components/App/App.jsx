import React from "react";
import './App.css';
import {getGenres} from '../../Util/Tmdb.js'

import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: [],
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
