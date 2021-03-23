import React from 'react'
import styles from './Total.module.css'

const Total = () => {
    const [valorTotal, setvalorTotal] = React.useState(0)

    return (
        <div>
            <h3>Valor Total</h3>
            <p>{valorTotal}</p>
        </div>
    )
}

export default Total
