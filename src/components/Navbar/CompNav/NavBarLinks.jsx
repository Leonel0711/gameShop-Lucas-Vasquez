import CommonLinks from "./CommonLinks";
import Dropwdown from "./Dropdown";
import { Link } from "react-router-dom"
function NavBarLinks() {
    return (
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-body links-list">
                <Link to="/gameShop-Lucas-Vasquez/">
                    <CommonLinks title="Home" />
                </Link>
                <Link to="/gameShop-Lucas-Vasquez/user/login">
                    <CommonLinks title="Iniciar Sesión" />
                </Link>

                <Dropwdown title="Categorias" subLinks={["Teclado", "Mouse", "Auriculares"]} />
            </div>
        </div>
    )
}
export default NavBarLinks;