import React from 'react'
import {json} from './ProdutosJson'
import styles from './Total.module.css'
import {GlobalContext} from './GlobalContext';

const Total = (props) => {
    const global = React.useContext(GlobalContext)
    const [valorTotal, setvalorTotal] = React.useState(10)


    const map = json.map((dados, id)=>{ return dados.valor})
  //  console.log(map.reduce((acc,curr)=>acc + curr ))
  // ESTA CERTO

    React.useEffect(()=>{
       setvalorTotal()
    },[global.counter])
 
    return (
        <div className={styles.contentTotal}>
            <h3>Valor Total:</h3>
            {valorTotal}
        </div>
    )
}

export default Total;
