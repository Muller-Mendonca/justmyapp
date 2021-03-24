import React from 'react'
import {json} from './ProdutosJson'
import styles from './Total.module.css'

const Total = (props) => {
    const [valorTotal, setvalorTotal] = React.useState(0)

    React.useEffect(()=>{
        setvalorTotal(json.map((dados, id)=>{
           return <p key={id}>{dados.valor}</p>
        }))
    },[])
        

    return (
        <div className={styles.contentTotal}>
            <h3>Valor Total</h3>
            {valorTotal}
        </div>
    )
}

export default Total
