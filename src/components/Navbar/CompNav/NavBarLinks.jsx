import CommonLinks from "./CommonLinks";
import Dropwdown from "./Dropdown";
import { Link } from "react-router-dom"
import { HiOutlineUserCircle } from 'react-icons/hi';
import { SesionContext } from "../../Main/SesionContext";
import { useContext } from "react";
function NavBarLinks() {
    const sesion = useContext(SesionContext)
    return (
        <div className="offcanvas offcanvas-end text-bg-dark navbarLinks" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
                {sesion.user && <><HiOutlineUserCircle className="iconUser" /><p>{sesion.user.name}</p></>}
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body links-list">
                <Link to="/gameShop-Lucas-Vasquez/">
                    <CommonLinks title="Home" />
                </Link>
                {sesion.user ?
                    <div className='div-links'>
                        <button className="nav-link link" onClick={sesion.removeUser} >Log Out</button>
                    </div>
                    :
                    <>
                        <Link to="/gameShop-Lucas-Vasquez/user/login">
                            <CommonLinks title="Iniciar Sesión" />
                        </Link>
                        <Link to="/gameShop-Lucas-Vasquez/user/register">
                            <CommonLinks title="Registrarse" />
                        </Link>
                    </>}


                <Dropwdown title="Categorias" subLinks={["Teclado", "Mouse", "Auriculares"]} />
            </div>
        </div>
    )
}
export default NavBarLinks;