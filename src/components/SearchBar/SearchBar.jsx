import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            option: ''
        };

        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange(event) {
        this.setState({
            option: event.target.value
        });
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
                    <button id="playBtn">Let's Play!</button>                   
                </div>
            </div>
        )
    }
}

export default SearchBar;