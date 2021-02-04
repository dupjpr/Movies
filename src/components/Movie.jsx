import React, { useEffect, useState } from 'react';

const Movie = ({ movieID, movieState, setMovieState }) => {

    const [movieInfo, setMovieInfo] = useState([]);

    const handleClick = () => {
        setMovieState(!movieState);
    }

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=f1960c26`)
            .then(response => response.json())
            .then(data => setMovieInfo(data));
    }, [movieID]);

    console.log(movieInfo);

    return (
        <div>
            <div onClick={() => handleClick()}>X</div>
            <div>{movieInfo.Title}</div>
            <div>{movieID}</div>
        </div>
    );
}

export default Movie;