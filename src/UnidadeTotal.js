import React from 'react'
import styles from './UnidadeTotal.module.css'
import {json} from './ProdutosJson'
import Counter from './Counter'

const UnidadeTotal = () => {

    return (
        <div className={styles.unidadeTotal}>
            <p>VALOR TOTAL</p>
            {json.map((dados)=> <p>{dados.valor}</p>)}
        </div>
    )
}

export default UnidadeTotal
