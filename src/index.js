import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContextProvider from '../src/contexts/AppContext.js';


ReactDOM.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>,
    document.getElementById('root')
);

