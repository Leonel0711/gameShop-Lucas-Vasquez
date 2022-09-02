function NavBarBuy() {

    return (
        <div className="offcanvas offcanvas-end nav" tabIndex={-1} id="navBarCarrito" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h2 className="offcanvas-title nav_title">
                    Compra
                </h2>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
                <ul id="carrito">
                    <div className="d-block msgSinP">
                        <h3>No hay productos</h3>
                    </div>
                </ul>
                <div className="pFinal">
                    <h3>Precio Final:</h3>
                    <h3 id="precioFinal">$0</h3>
                </div>
                <button id="btnFinalizar">Finalizar compra</button>
                <button id="borrar">Borrar pedido</button>
            </div>
        </div>
    );

}
export default NavBarBuy;