import CommonLinks from "./CommonLinks";
import Dropwdown from "./Dropdown";
function NavBarLinks() {
    return (
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-body">
                <CommonLinks title="Home" />
                <CommonLinks title="Iniciar Sesión" />
                <Dropwdown title="Juegos" subLinks={["Teclado", "Mouse", "Auriculares"]} />
            </div>
        </div>
    )
}
export default NavBarLinks;