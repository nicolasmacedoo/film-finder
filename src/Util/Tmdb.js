const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const requestParams = `?api_key=${import.meta.env.VITE_TMDB_KEY}`;

const getGenres = async () => {
    const genreRequestEndpoint = '/genre/movie/list';
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const genres = jsonResponse.genres;
            return genres;
        }
    } catch (error) {
        console.log(error);        
    }
};

const getMovies = async (genre) => {
    const discoverMovieEndpoint = '/discover/movie';
    const requestParamWithGenre = `${requestParams}&with_genre=${genre}`;
    const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParamWithGenre}&language=pt-BR`;

    try {
        const response = await fetch(urlToFetch);
        if(response.ok) {
            const jsonResponse = await response.json();
            const movies = jsonResponse.results;
            return movies
        }
    } catch (error) {
        console.log(error);
    }
};

const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex]
    return randomMovie;
};

const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    const movieEndpoint = `/movie/${movieId}`;
    const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}&language=pt-BR`;

    try {
        const response = await fetch(urlToFetch);
        if(response.ok) {
            const jsonResponse = await response.json();
            const movieInfo = jsonResponse
            return movieInfo
        }
    } catch (error) {
        console.log(error);
    }
};

export {getGenres}