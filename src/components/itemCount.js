import { useState } from "react";
import "../components/css/count.css"

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);
    console.log("valor inicial ", count);

    const addItem = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
            setCount(newValue);
        }
    };

    const quitItem = () => {
        const newValue = count - 1;
        if (newValue >= initial) {
            setCount(newValue);
        }
    };

    const onAdd = () => {
        const message = `Agregaste ${count} producto`;
        count === 1 ? alert(message) : alert(`${message}s`);
    };
    return (
        <>
        <div className="countContainer">
            <h3>STOCK</h3>
            <div className="count">
                <button onClick={addItem}>+</button>
                <h3>{count}</h3>
                <button onClick={quitItem}>-</button>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
            
        </>
    );
};
export default ItemCount;
