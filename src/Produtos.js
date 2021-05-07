import React from 'react'
import styles from './Produtos.module.css'
import {json} from './ProdutosJson'
import UnidadeTotal from './UnidadeTotal'
import {GlobalContext} from './GlobalContext';
import Total from './Total';

const Produtos = () => {
  const global = React.useContext(GlobalContext)

    return (
        <div className={styles.produtos}>
             {json.map((data, id) =>{
                return (
                   <div className={styles.content} key={id}>
                    <h3>{data.nome}</h3>
                     <UnidadeTotal/>
                     <h4>{data.valor * global.counter.toFixed(4)}<p style={{color: '#0bd692', display: 'inline-block', fontSize: '15px'}}>R$</p></h4>
                  </div>
                )
            })}
            <Total/>
        </div>
    )
}

export default Produtos;
