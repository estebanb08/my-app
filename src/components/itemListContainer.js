import "./css/itemListContainer.css";
// import ItemCount from "./itemCount";
import ItemList from "./itemList";
import {data} from "../service/api"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, productsData] = useState([]);
  console.log(products);
  const { category } = useParams();
  console.log(category);



    useEffect(() => {
      data
          .then((res) => {
              if (category) {
                  productsData(
                      res.filter((product) => product.category === category)
                  );
              } else {
                  productsData(res);
              }
          })
          .catch((err) => alert("Ha ocurrido un error", err));
  }, [category]);

  return (
    <div className="container col-12 bg-warning">
        <h3>{greeting}</h3>
        {products.length !== 0 ? (
            <ItemList products={products} />
        ) : (
            <h1>Loading...</h1>
        )}
    </div>
  )
}

  // return (
  //   <div>
  //     <h3>{greeting}</h3>
  //     {menssage && <p>{menssage}</p>}



  //     {loading ? <p className="carga">Cargando... </p> : <ItemList productsList={productsList}/>}
  //     <ItemCount initial={1} stock={15}/>
  //     {/* <ItemList items={items} /> */}
    // </div>
//   ) 
// }

    
export default ItemListContainer;
