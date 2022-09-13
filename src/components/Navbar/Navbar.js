import React from 'react';
import './navbar.css';
import CartWidget from './CompNav/CartWidget';
import BtnNavbar from './CompNav/BtnNavBar';
import NavBarLinks from './CompNav/NavBarLinks';
import NavBarBuy from './CompNav/NavBarBuy';
import { Link } from "react-router-dom"

function Navbar() {
    return <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <Link to="/gameShop-Lucas-Vasquez/">
                <button className="navbar-brand bg-dark" id='navbarBrand'>Game<span className='red'>SHOP</span></button>
            </Link>
            <div className="nav_buttons">
                <CartWidget />
                <BtnNavbar />
            </div>
            <NavBarLinks />
            <NavBarBuy />
        </div>
    </nav>
}
export default Navbar;