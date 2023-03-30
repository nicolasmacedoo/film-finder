import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            option: ''
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleOptionChange(event) {
        this.setState({
            option: event.target.value
        });
    }

    handleSearch(event) {
        this.props.searchRandomMovie(this.state.option);

        event.preventDefault();
    }

    render() {
        return (
            <div className="genre">
                <p>Choose a genre</p>
                <select name="genres" id="genres" onChange={this.handleOptionChange}>
                    <option key="">Choose...</option>
                    {
                        this.props.genres.map(genre => {
                            return <option key={genre.id}>{genre.name}</option>
                        })
                    }
                </select>
                <div>
                    {this.state.option && <p>You selected {this.state.option}</p>}
                    <button id="playBtn" onClick={this.handleSearch}>Let's Play!</button>                   
                </div>
            </div>
        )
    }
}

export default SearchBar;