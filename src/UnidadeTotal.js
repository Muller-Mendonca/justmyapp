import React from 'react'
import styles from './UnidadeTotal.module.css'
import {json} from './ProdutosJson'
import {GlobalContext} from './GlobalContext';


const UnidadeTotal = () => {
    const global = React.useContext(GlobalContext)

    return (
        <div className={styles.content}>
            <button className={styles.diminuir} onClick={global.diminuir}>-</button>
            <p className={styles.theCounter}>{global.counter}</p>
            <button className={styles.somar} onClick={global.somar}>+</button>
            <p>{json[0].valor}</p>
        </div>
    )
}

export default UnidadeTotal
