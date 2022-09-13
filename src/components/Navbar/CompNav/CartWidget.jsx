
function CartWidget() {
    //Simplemente es un button con un icono ya sea por svg o iconos de react y un numero hardcodeado
    return (
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navBarCarrito"
            aria-controls="navBarCarrito" id="btnCarritoNav">
            <span className="sc-dkzDqf eOXMum"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="none" viewBox="0 0 24 24" className="shopping-card-icon">
                <path fill="white"
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.67-1.43a.993.993 0 00-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z">
                </path>
            </svg><span color="graya100" data-testid="typography" className="cantProdCarr"
                id="cantProdCarrito">7</span></span>
        </button>
    )
}

export default CartWidget;