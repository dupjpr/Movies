import React, { useState, useContext, useEffect } from 'react';

import { AppContext } from '../contexts/AppContext.js';
import Movie from '../components/Movie.jsx';


const Movies = () => {

    const dataContext = useContext(AppContext);

    const { keyWord } = dataContext;

    const [movies, setMovies] = useState([]);
    const [movieState, setMovieState] = useState(false);
    const [movieID, setMovieID] = useState('');

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${keyWord}&apikey=f1960c26`)
            .then(response => response.json())
            .then(data => {
                data.Response === 'True' ? setMovies(data.Search) : setMovies([{ Title: 'Sorry there are no results. Try again with another search.', imdbID: '01' }])
            });
    }, [keyWord]);

    console.log(movies);

    const handleClick = (e, movieID) => {
        console.log('leyendo..');
        setMovieState(!movieState);
        setMovieID(movieID);
    }

    return (
        <div className='section'>
            {movies.map((movie) => (
                <div key={movie.imdbID}>
                    <div>{movie.Title}</div>
                    <img onClick={(e) => handleClick(e, movie.imdbID)} src={movie.Poster} />
                </div>
            ))}
            {movieState ? <Movie movieID={movieID} movieState={movieState} setMovieState={setMovieState} /> : null}
        </div>
    );
}

export default Movies;