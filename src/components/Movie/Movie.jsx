import React from "react";
import './Movie.css';

class Movie extends React.Component {
    render() {
        return (
            <div className="movieInfo">
                <div className="moviePoster"></div>
                <div className="movieText"></div>
            </div>
        )
    }
}

export default Movie;