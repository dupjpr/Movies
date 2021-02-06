import React, { useState, useContext, useEffect } from 'react';

import { AppContext } from '../contexts/AppContext.js';

import ShowMovies from './ShowMovies.jsx';
import NotFoundMsn from './NotFoundMsn.jsx';


const Movies = () => {

    const dataContext = useContext(AppContext);

    const { keyWord } = dataContext;

    const [searchMovies, setMovies] = useState([]);
    

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${keyWord}&apikey=f1960c26`)
            .then(response => response.json())
            .then(data => setMovies({ check: data.Response, movies: data.Search }));
    }, [keyWord]);

    console.log(searchMovies);
  

    return (
        searchMovies.check === 'True' ? < ShowMovies searchMovies={searchMovies} /> : <NotFoundMsn />
    );
}

export default Movies;