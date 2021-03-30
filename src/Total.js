import React from 'react'
import {json} from './ProdutosJson'
import styles from './Total.module.css'

const Total = (props) => {
    const [valorTotal, setvalorTotal] = React.useState(0)

    const map = json.map((dados, id)=>{ return <p key={id}>{dados.valor}</p>})

    React.useEffect(()=>{
       setvalorTotal(map.reduce((acc,curr)=>{
           return <p>{acc+ curr}</p>
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
