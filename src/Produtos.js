import React from 'react'
import styles from './Produtos.module.css'
import {json} from './ProdutosJson'

const Produtos = () => {
    return (
        <div className={styles.produtos}>
             {json.map((data) =>{
                return (
                   <>
                    <h3 className={styles.titulo}>{data.nome}</h3>
                    <p>{data.valor}</p>
                  </>
                )
            })}
        </div>
    )
}

export default Produtos;
