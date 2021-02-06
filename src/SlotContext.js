import React, { useState } from 'react';

const SlotContext = React.createContext();

const SlotContextProvider = ({children}) => {
    const [ar, setAr] = useState([])

    return(
        <SlotContext.Provider value={{ar,setAr}}
        >
            {children}
        </SlotContext.Provider>
    )

}

export {SlotContextProvider, SlotContext}