import React, { useState, useContext, useEffect, Fragment } from 'react';

import { AppContext } from '../contexts/AppContext.js';

import ShowMovies from './ShowMovies.jsx';
import NotFoundMsn from './NotFoundMsn.jsx';

const Movies = () => {

    const dataContext = useContext(AppContext);

    const { keyWord } = dataContext;

    const [searchMovies, setSearchMovies] = useState('');
    const [idMovies, setIdMovies] = useState([]);
    const [infoMovies, setInfoMovies] = useState([]);
    const [spinnerIsActive, setSpinnerisActive] = useState(false);

    useEffect(() => {
        setSpinnerisActive(true);
        fetch(`http://www.omdbapi.com/?s=${keyWord}&apikey=f1960c26`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True') {
                    const idMovies = data.Search.map((movie) => movie.imdbID);
                    setIdMovies(idMovies);
                    setSearchMovies({ check: data.Response, movies: data.Search });
                    return
                } else {
                    setSearchMovies({ check: data.Response });
                    setSpinnerisActive(false);
                    return
                }
            });
    }, [keyWord]);

    useEffect(() => {
        const info = [];
        idMovies.map((id) => {
            fetch(`http://www.omdbapi.com/?i=${id}&apikey=f1960c26`)
                .then(response => response.json())
                .then(data => {
                    info.push(data);
                    setSpinnerisActive(false)
                });
        })
        setInfoMovies(info)
    }, [idMovies]);

    return (
        <Fragment>
            {spinnerIsActive && <div className='container'> <div className={spinnerIsActive ? 'donutSpinner' : 'donutSpinner-hidden'}></div> </div>}
            {searchMovies.check === 'True' ? < ShowMovies
                searchMovies={searchMovies}
                infoMovies={infoMovies}
            /> : <NotFoundMsn searchMovies={searchMovies} />}

        </Fragment>
    );
}

export default Movies;