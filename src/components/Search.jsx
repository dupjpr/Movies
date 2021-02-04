import React, { useState, useContext } from 'react';
import { AppContext } from '../contexts/AppContext.js';

const Search = () => {

    const [userWord, setUserWord] = useState('');
    const [element, setElement] = useState('');

    const dataContext = useContext(AppContext);

    const { setKeyWord } = dataContext;

    const handleChange = (e) => {
        setUserWord(e.target.value);
        const element = e.target;
        setElement(element);
    };

    const handleSubmit = (e, element) => {
        e.preventDefault()
        setKeyWord(userWord);
        element.value='';
    };

    return (
        <div>

            <form onSubmit={(e) => handleSubmit(e, element)} >
                <input onChange={(e) => handleChange(e)} type="text" />
                <button type="submit">Buscar</button>
            </form>
        </div>

    );
}

export default Search;