import ItemCount from "./ItemCount";
import "../components/css/itemCss.css"

const ItemDetail = ({ item }) => {
    console.log("El item", item);
    return (
        <div className="itemCss">
            <h2>Seleccion del producto</h2>
            <h3>{item.title}</h3>
            <img src={`${item.image}`} alt={`${item.image}`}></img>
            <p>{item.descripcion}</p>

            <ItemCount stock={5} initial={1} />
        </div>
    );
};
export default ItemDetail;
