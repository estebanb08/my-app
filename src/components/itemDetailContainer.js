import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    console.log("item", item);
    const { id } = useParams();
    console.log(id);

    // const id = 1;
    const getOneProduct = (id) => {
        fetch("../JSON/DataList.json")
            .then((response) => response.json())
            .then((data) =>
                setItem(data.filter((item) => item.id === parseInt(id))[0])
            );
    };

    useEffect(() => {
        getOneProduct(id);
    }, [id]);

    return (
        <div>
            {item.length !== 0 ? (
                <ItemDetail item={item} />
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};
export default ItemDetailContainer;
