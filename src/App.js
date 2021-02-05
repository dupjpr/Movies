import React, { useContext } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
import Search from './components/Search';
import Msn from './components/Msn';
import { AppContext } from "../src/contexts/AppContext.js";

import '../src/style.scss';

function App() {

  const dataContext = useContext(AppContext);

  const { keyWord } = dataContext;

  return (
    <div className="App">
      <Header />
      <Search />
      {keyWord.length > 0 ? <Movies /> : <Msn />}
    </div>
  );
}

export default App;
