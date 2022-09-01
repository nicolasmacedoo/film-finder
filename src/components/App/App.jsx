import React from "react";
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import Film from '../Film/Film';

class App extends React.Component {
  render()  {
    return (
      <div>
        <h1 className="appTitle">🍿Film Finder🍿</h1>
        <SearchBar />
      </div>
    )
  }
}

export default App
