import { useState } from "react";
import "../components/css/count.css"

const ItemCount = ({ stock, initial }) => {
    // Voy a sumar hasta que el número sea menor o igual que stock
    // Voy a restar hasta que el número sea mayor o igual que el valor inicial

    // Declaro el hook para el contador
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
        //   Utilizo un condicional ternario (condicional) ? (true) : (false)
        count === 1 ? alert(message) : alert(`${message}s`);
    };
    return (
        <>
        <div className="countContainer">
            <h3>STOCK</h3>
            <div className="count">
                {/* Acá sumamos (addItem) */}
                <button onClick={addItem}>+</button>
                <h3>{count}</h3>
                {/* Acá restamos (quitItem) */}
                <button onClick={quitItem}>-</button>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
            
        </>
    );
};
export default ItemCount;
