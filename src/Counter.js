import React from 'react'
import {json} from './ProdutosJson'
import styles from './Counter.module.css'

const Counter = () => {

    const [counter, setCounter] = React.useState(0)
    const [totalCounter, setTotalCounter] = React.useState(0)

    React.useEffect(()=>{
        console.log('counter mudou')
        setTotalCounter(json.map((dados, id)=>{
            return <p key={id}>{dados.valor * counter}</p>
         }))
    },[counter])

    function handleSoma(){
        setCounter(counter + 1)
    }

    function handleDiminuir(){
        setCounter(counter - 1)
    }


    return (
        <div className={styles.content}>
            <button className={styles.diminuir} onClick={handleDiminuir}>-</button>
            <button className={styles.counter}>{counter}</button>
            <button className={styles.soma} onClick={handleSoma}>+</button>
           
        </div>
        
    )
}

export default Counter
