import React from "react";

class Film extends React.Component {
    redner() {
        return (
            <div className="movieInfo">
                <div className="moviePoster"></div>
                <div className="movieText"></div>
            </div>
        )
    }
}

export default Film;