import { useState, useEffect } from "react";
// import axios from "axios";
import ItemList from "./ItemList";
import getProducts from "../services/handMadePromise";
import { useParams } from "react-router-dom";
import "../components/css/itemCss.css"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    console.log(products);
    const { category } = useParams();
    console.log(category);

    useEffect(() => {
        getProducts
            .then((res) => {
                if (category) {
                    setProducts(
                        res.filter((product) => product.categoria === category)
                    );
                } else {
                    setProducts(res);
                }
            })
            .catch((err) => alert("Ha ocurrido un error", err));
    }, [category]);

    return (
        <div className="itemCss d-flex flex-row">
            <h3>{greeting}</h3>
            {products.length !== 0 ? (
                <ItemList products={products} />
            ) : (
                <h1>Loading products...</h1>
            )}
        </div>
    );
};
export default ItemListContainer;
