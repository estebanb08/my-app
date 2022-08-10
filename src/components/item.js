// import React, {useState} from 'react'
// import ItemCount from './itemCount'
// import './css/item.css'


// const Item = ({product}) => {
//   // const[mensaje, setMensaje] = useState(false)
//   const { img, name, description, price, stock } = product
//   return(
//     <div className='cardFather'>
//       <div className="card">
//         <img src={img} className="card-img-top" alt={name} />
//           <div className="card-body">
            
//             <h5 className="card-title">{name}</h5>
//             <p className="card-text">{description}</p>
//             <p className="card-text">${price}</p>
//             <p className="card-text">{stock}</p>
//           </div>
//       </div>
//     </div>
//   ) 
// }


// export default Item

import { Link } from "react-router-dom";

const Item = ({ description, price, stock, title, id }) => {
    return (
        <Link to={`/item/${id}`}>
            <div className="flex bg-info">
                <h3>{title}</h3>
                <h2>{price}</h2>
                <p>{description}</p>
                <p>{stock}</p>
            </div>
        </Link>
    );
};
export default Item;