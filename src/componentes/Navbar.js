import './navbar.css';

export function Navbar() {
    return <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <button className="navbar-brand bg-dark" id='navbarBrand'>Game<span className='red'>SHOP</span></button>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">  </h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='div-links'>
                        <button className="nav-link active link" aria-current="page" >Home</button>
                    </div>
                    <div className='div-links'>
                    <button className="nav-link link" >Iniciar Sesion</button>
                    </div>
                    <div className='div-links nav-item dropdown'>
                        <button className="nav-link dropdown-toggle link" data-bs-toggle="dropdown" aria-expanded="false">
                                Juegos
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><button className="dropdown-item link" >Acción</button></li>
                                <li><button className="dropdown-item link" >Aventura</button></li>
                                <li><button className="dropdown-item link" >Fantasia</button></li>
                                <li><button className="dropdown-item link" >Deportes</button></li>
                                <li><button className="dropdown-item link" >Estrategia</button></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}