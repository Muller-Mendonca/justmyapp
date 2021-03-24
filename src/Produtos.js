import React from 'react'
import styles from './Produtos.module.css'
import {json} from './ProdutosJson'
import Counter from './Counter'
import UnidadeTotal from './UnidadeTotal'

const Produtos = () => {

    return (
        <div className={styles.produtos}>
             {json.map((data, id) =>{
                return (
                   <div key={id}>
                    <h3>{data.nome}</h3>
                    <p>{data.valor}</p>
                    <Counter/>
                    <UnidadeTotal/>
                  </div>
                )
            })}
            
        </div>
    )
}

export default Produtos;
