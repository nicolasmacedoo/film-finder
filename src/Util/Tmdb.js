const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const requestParams = `?api_key=${import.meta.env.VITE_TMDB_KEY}`;

console.log(requestParams)
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

export {getGenres}