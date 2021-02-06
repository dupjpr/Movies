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
        if (userWord !== '') {
            e.preventDefault()
            setKeyWord(userWord);
            element.value = '';
        }
    };

    return (
        <section className='search'>
            <form className='search__search-form' onSubmit={(e) => handleSubmit(e, element)} >
                <input className='search__search-form__input' onChange={(e) => handleChange(e)} type="text" />
                <button className='search__search-form__button' type="submit"><i className="fas fa-search"></i></button>
            </form>
        </section>
    );
}

export default Search;