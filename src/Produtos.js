import React from 'react'
import styles from './Produtos.module.css'
import {json} from './ProdutosJson'
import UnidadeTotal from './UnidadeTotal'

const Produtos = () => {

    return (
        <div className={styles.produtos}>
             {json.map((data, id) =>{
                return (
                   <div className={styles.content} key={id}>
                    <h3>{data.nome}</h3>
                    <p>{data.valor}</p>
                     <UnidadeTotal/>
                  </div>
                )
            })}
            
        </div>
    )
}

export default Produtos;
