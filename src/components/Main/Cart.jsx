import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ProductContainer from './ProductContainer';

function Cart() {
    const myCart = useContext(CartContext);
    const finalPrice = myCart.cartList.reduce((acumulador, producto) => acumulador += (producto.precio * producto.amount), 0);

    return (
        <div className='mainCarrito text-center'>
            <div className='contTitleCart my-4'>
                <div className='rowCartTitle row'>
                    <h1 className='col-10'>Tu Carrito</h1>
                    <button onClick={myCart.clear} type="button" className="btn btn-primary col-2 btnClear" disabled={myCart.cartList.length === 0 && true}>Borrar Carrito</button>
                </div>
            </div>

            {myCart.cartList.length === 0 ? <div>
                <h2 className='textNoCart'>No hay productos agregados</h2>
                <Link to="/gameShop-Lucas-Vasquez/"><button type="button" className="btn btn-primary">Seguir comprando</button>
                </Link>
            </div> : <div className=' container-xxl'>
                {myCart.cartList.map(producto => <ProductContainer key={producto.id} product={producto} btnAction={myCart.borrar} />)}
            </div>
            }
            {myCart.cartList.length !== 0 && <div className='finalPriceBox container-xxl'>
                <p className='pFinalText'>Total: $ {new Intl.NumberFormat('es-MX').format(finalPrice)}</p>
            </div>}

        </div>
    )
}

export default Cart;