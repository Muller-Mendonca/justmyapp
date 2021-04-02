import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [counter, setCounter] = React.useState(0)

    return (
       <GlobalContext.Provider value={{counter, setCounter}}>
           {children}
       </GlobalContext.Provider>
        
    )
}
