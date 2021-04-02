import React from 'react'
import styles from './UnidadeTotal.module.css'
import {GlobalContext} from './GlobalContext';


const UnidadeTotal = () => {
    const global = React.useContext(GlobalContext)

function handleClick(){
    global.setCounter((counter) => counter + 1)
}

    return (
        <div className={styles.unidadeTotal}>
            {global.counter}
            <button onClick>{handleClick}ADICIONAR</button>
        </div>
    )
}

export default UnidadeTotal
