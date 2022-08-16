import { Link } from "react-router-dom";

const Item = ({ description, price, stock, title, image, id }) => {
    return (
        <Link to={`/item/${id}`}>
            <div className="itemEditBorder bg-light" style={{ width: '25rem', color: 'black', textDecoration: 'none', marginBottom: '5em'}}>
                <h3>{title}</h3>
                <img src={image}></img>
                <h2>{price}</h2>
                <p>{description}</p>
                <p>Stock disponible: {stock}</p>
            </div>
        </Link>
    );
};
export default Item;
