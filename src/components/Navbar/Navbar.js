import React from 'react';
import './navbar.css';
import CartWidget from './CompNav/CartWidget';
import BtnNavbar from './CompNav/BtnNavBar';
import NavBarLinks from './CompNav/NavBarLinks';
import NavBarBuy from './CompNav/NavBarBuy';
import { Link } from "react-router-dom"
//Navbar con el CardWidget sin efecto aun, un navbar-Brand con enlace para cambiar la direccion.
function Navbar() {
    return <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            {/* Link nos permite cambiar la ruta del navegador, solo recibe to como parametro, donde indicamos que direccion tiene que tener el navegador */}
            <Link to="/gameShop-Lucas-Vasquez/">
                <button className="navbar-brand bg-dark" id='navbarBrand'>Game<span className='red'>SHOP</span></button>
            </Link>
            <div className="nav_buttons">
                {/* Btns para mostrar el carrito y la navbar lateral */}
                <CartWidget />
                <BtnNavbar />
            </div>
            {/* NavbarLateral de los links de la pagina y Navbar lateral del carrito */}
            <NavBarLinks />
            <NavBarBuy />
        </div>
    </nav>
}
export default Navbar;