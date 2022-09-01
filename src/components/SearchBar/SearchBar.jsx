import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="genre">
                <p>Choose a genre</p>
                <select name="genres" id="genres"></select>
                <button id="playBtn">Let's Play!</button>
            </div>
        )
    }
}

export default SearchBar;