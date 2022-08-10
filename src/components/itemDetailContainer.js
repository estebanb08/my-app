import { useState, useEffect } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]); 
    console.log("item", item);
    const { id } = useParams();
    console.log(id);

    
    const oneProduct = (id) => {
        fetch("../../public/JSON/dataPage.json")
            .then((response) => response.json())
            .then((data) =>
                setItem(data.filter((item) => item.id === parseInt(id))[0])
            );
    };

    useEffect(() => {
        oneProduct(id);
    }, [id]);



    return (
        <div className="itemDetailContainer">
            {item.length !== 0 ? (
                <ItemDetail item={item} />
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};
export default ItemDetailContainer;