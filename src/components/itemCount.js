import React from 'react'
import { useState } from 'react'
import './css/itemCount.css'
import charge from './assets/img/charge.jpg' 

const ItemCount = ({initial, stock}) => {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }              
    const restar = () => {
        if(count > initial)
        setCount(count - 1)
    }

    return (
        <div className='contador'>
            <div>
                <img className='chargeImage' src={charge}></img>
            </div>
            <div>
                <h3>{count}</h3>
            </div>
            <div className='botones'>
                <button className='restar' onClick={restar}>-</button>
            
                <button className='sumar' onClick={sumar}>+</button>
            </div>
            

        </div>
    )
}

export default ItemCount