import React from 'react'
import {json} from './ProdutosJson'
import styles from './Total.module.css'

const Total = (props) => {
    const [valorTotal, setvalorTotal] = React.useState(0)

    const map = json.map((dados, id)=>{ return dados.valor})
  //  console.log(map.reduce((acc,curr)=>acc + curr ))
  // ESTA CERTO

    React.useEffect(()=>{
       setvalorTotal(map.reduce((anterior, atual)=>{
           console.log(anterior + atual)
           return <p>{anterior + atual}</p>
       }))
    },[])
 

    return (
        <div className={styles.contentTotal}>
            <h3>Valor Total</h3>
            {valorTotal}
        </div>
    )
}

export default Total;
