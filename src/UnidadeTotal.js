import React from 'react'
import styles from './UnidadeTotal.module.css'
import {json} from './ProdutosJson'
import Counter from './Counter'

const UnidadeTotal = () => {
    const [valorTotal, setvalorTotal] = React.useState(0)
    console.log(counter)

    return (
        <div className={styles.unidadeTotal}>
            <p>VALOR TOTAL</p>
            {valorTotal}
        </div>
    )
}

export default UnidadeTotal
