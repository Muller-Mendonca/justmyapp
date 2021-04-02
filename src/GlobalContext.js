import React from 'react'
import styles from './GlobalContext.module.css'

const Counter = () => {
    const [counter, setCounter] = React.useState(0)

    function handleSoma(){
        setCounter(counter + 1)
    }

    function handleDiminuir(){
        if(counter === 0){
            setCounter(counter)
        } 
        else {
            setCounter(counter - 1)
        }
    }


    return (
        <div className={styles.content}>
            <button className={styles.diminuir} onClick={handleDiminuir}>-</button>
            <button className={styles.counter}>{counter}</button>
            <button className={styles.soma} onClick={handleSoma}>+</button>
        </div>
        
    )
}

export default Counter;