import React, { useState } from 'react';
import Movie from '../components/Movie.jsx';

const ShowMovies = ({ searchMovies }) => {

    const [movieState, setMovieState] = useState(false);
    const [movieID, setMovieID] = useState('');

    const { check, movies } = searchMovies;

    console.log(movies);

    const handleClick = (e, movieID) => {
        console.log('leyendo..');
        setMovieState(!movieState);
        setMovieID(movieID);
    }

    const handleClickLeave = () => {
        setMovieState(!movieState);
    }
    return (
        <section className='section-movies'>
            {movies.map((movie) => (
                <div className='section-movies__movie' key={movie.imdbID}>
                    <h2 className='section-movies__movie__title'>{movie.Title}</h2>
                    <div className='section-movies__movie__image'>
                        <img className='section-movies__movie__image__img' onMouseEnter={(e) => handleClick(e, movie.imdbID)} onMouseLeave={(e) => handleClickLeave(e)} src={movie.Poster} />
                    </div>
                </div>
            ))}
            {movieState ? <Movie movieID={movieID} movieState={movieState} setMovieState={setMovieState} /> : null}
        </section>
    );
}

export default ShowMovies;