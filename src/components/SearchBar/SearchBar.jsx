import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="genre">
                <p>Choose a genre</p>
                <select name="genres" id="genres">
                    <option key="">Choose...</option>
                    {
                        this.props.genres.map(genre => {
                            return <option key={genre.id}>{genre.name}</option>
                        })
                    }
                </select>
                <div>
                    <button id="playBtn">Let's Play!</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;