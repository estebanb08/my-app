import Item from "./item";

const ItemList = ({ productsList }) => {
  return (
    <div>
        {productsList.map((product) => <Item key={product.id} product={product} />)}
    </div>
  )
}
 
export default ItemList;