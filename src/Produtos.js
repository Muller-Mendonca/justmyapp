import React from 'react'
import styles from './Produtos.module.css'
import {json} from './ProdutosJson'
import Counter from './Counter'

const Produtos = () => {

    return (
        <div className={styles.produtos}>
             {json.map((data, id) =>{
                return (
                   <div key={id}>
                    <h3>{data.nome}</h3>
                    <p>{data.valor}</p>
                    <Counter/>
                  </div>
                )
            })}
            
        </div>
    )
}

export default Produtos;
