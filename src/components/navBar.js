import CartWidget from "./CartWidget";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">   
                        <Nav>Shop Funkis</Nav>

    <br />
                        <Link to="/category/Funko-POP">Funko POP /  </Link>
                        
                        <Link to="/category/Funko-POP-2">Funko POP 2 </Link>
                        
                            
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
};
export default NavBar;
