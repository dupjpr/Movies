import { createContext } from "react";
import { useState } from "react";



const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    
    const [keyWord, setKeyWord] = useState('');
    
    return (  
        <AppContext.Provider value={{keyWord, setKeyWord}}>
            {children}
        </AppContext.Provider>
    );
}


export {AppContext};
export default AppContextProvider;