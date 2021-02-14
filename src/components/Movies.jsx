import React, { useState, useContext, useEffect } from 'react';

import { AppContext } from '../contexts/AppContext.js';

import ShowMovies from './ShowMovies.jsx';
import NotFoundMsn from './NotFoundMsn.jsx';


const Movies = () => {

    const dataContext = useContext(AppContext);

    const { keyWord } = dataContext;

    const [searchMovies, setMovies] = useState('');
    const [idMovies, setIdMovies] = useState([]);
    const [infoMovies, setInfoMovies] = useState([]);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${keyWord}&apikey=f1960c26`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True') {
                    const idMovies = data.Search.map((movie) => movie.imdbID)
                    setIdMovies(idMovies)
                }
                setMovies({ check: data.Response, movies: data.Search })
            });
    }, [keyWord]);

    useEffect(() => {
        const info = [];
        idMovies.map((id) => {
            fetch(`http://www.omdbapi.com/?i=${id}&apikey=f1960c26`)
                .then(response => response.json())
                .then(data => {
                    info.push(data);
                });
        })
        setInfoMovies(info)
    }, [idMovies]);

    console.log(infoMovies);
    console.log(searchMovies);
    return (

        searchMovies.check === 'True' ? < ShowMovies
            searchMovies={searchMovies}
            infoMovies={infoMovies}
        /> : <NotFoundMsn />
    );
}

export default Movies;