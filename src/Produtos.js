import React from 'react'
import styles from './Produtos.module.css'

const Produtos = ({nome, valor}) => {
    return (
        <div className={styles.produtos}>
            <h3 className={styles.titulo}>{nome}</h3>
            <p>{valor}</p>
        </div>
    )
}

export default Produtos;
