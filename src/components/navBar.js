import logo from './assets/img/logo.png';
import './css/navBar.css';
import CartWidget from './cartWidget.js';
import { Link  } from "react-router-dom"




const link1 = 'Inicio'
const link2 = 'Comprar'
const link3 = 'Nosotros'
const titulo = 'Ecommerce'



function NavBar () {
    return <>
        <div className='Navbar'>
            <div className='logoNavbar'>
                <img className='logo' src={logo}></img>
                <h5>{titulo}</h5>
            </div>
            
            <ul>
                <li>{link1}</li>
                <li>{link2}</li>
                <li>{link3}</li>
                <Link to="/category/Funko-POP">Funko POP</Link>
                <Link to="/category/Funko-POP-2">Funko POP 2</Link>
            </ul>
                <CartWidget />
        </div>

    
   

    </>;

    
}

export default NavBar;