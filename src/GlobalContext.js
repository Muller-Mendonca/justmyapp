import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [counter, setCounter] = React.useState(5)

    function somar(){
        setCounter( counter + 1)
    }

    function diminuir(){
        if(counter === 0){
            setCounter(counter)
        } else{
            setCounter( counter - 1)
        }
    }

    return (
       <GlobalContext.Provider value={{counter, setCounter, somar, diminuir}}>
           {children}
       </GlobalContext.Provider>
        
    )
}
