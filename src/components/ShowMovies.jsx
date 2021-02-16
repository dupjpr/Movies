import React, { useState } from 'react';

const ShowMovies = ({ searchMovies, infoMovies }) => {

    const [movieInfo, setMovieInfo] = useState({});

    const { movies } = searchMovies;

    const handleOnMouse = (e, movieID) => {
        console.log('leyendo..', movieID);
        const movieFilter = infoMovies.filter((movie) => movie.imdbID === movieID);
        setMovieInfo(...movieFilter);
    }

    return (
        <section className='section-movies'>
            {movies.map((movie) => (
                <div className='section-movies__movie' key={movie.imdbID}>
                    <span className="section-movies__movie__tooltip">
                        <h4 className="section-movies__movie__tooltip__Title">{movieInfo.Title}</h4>
                        <div className="section-movies__movie__tooltip__info">
                            <div className="section-movies__movie__tooltip__Rating">{movieInfo.imdbRating}/10</div>
                            <div className="section-movies__movie__tooltip__Runtime">{movieInfo.Runtime}</div>
                            <div className="section-movies__movie__tooltip__Year">{movieInfo.Year}</div>
                        </div>
                        <p className="section-movies__movie__tooltip__Plot">{movieInfo.Plot === 'N/A' ? 'without register' : movieInfo.Plot}</p>
                        <div className="section-movies__movie__tooltip__Director"><strong>Director:</strong> {movieInfo.Director}</div>
                        <div className="section-movies__movie__tooltip__Genre"><strong>Genre:</strong> {movieInfo.Genre}</div>
                        <div className="section-movies__movie__tooltip__Actors"><strong>Actors:</strong> {movieInfo.Actors}</div>
                    </span>
                    <div className='section-movies__movie__image'>
                        <img
                            className='section-movies__movie__image__img'
                            onMouseEnter={(e) => handleOnMouse(e, movie.imdbID)}
                            src={movie.Poster === 'N/A' ? 'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=6&m=911590226&s=612x612&w=0&h=u6vP2FnJG8Ib3O1xofOUeJ5NtHWrWdRnV-OSL8arBnk=' : movie.Poster}
                            alt='movie-cover'
                        />
                    </div>
                    <strong><p className='section-movies__movie__title'>{movie.Title}</p></strong>
                </div>
            ))}
        </section>
    );
}

export default ShowMovies;