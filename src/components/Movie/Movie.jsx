import React from "react";
import './Movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="movieInfo">
                <div className="moviePoster">
                    <img 
                        src={`https://image.tmdb.org/t/p/original/${this.props.movie.poster_path}`} 
                        alt={`${this.props.movie.title} movie poster`} 
                        id="moviePoster" 
                    />
                </div>
                <div className="movieText">
                    <h1 id="movieTitle">{this.props.movie.title}</h1>
                    <p id="movieOverview">{this.props.movie.overview}</p>
                </div>
            </div>
        )
    }
}

export default Movie;