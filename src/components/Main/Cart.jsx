import { useEffect } from 'react';
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ProductContainer from './ProductContainer';

function Cart() {
    const [showComp, setShowComp] = useState(true);
    const myCart = useContext(CartContext);
    useEffect(() => {
        myCart.cartList.length === 0 ? setShowComp(true) : setShowComp(false)
    }, [myCart.cartList])
    return (
        <div className='mainCarrito text-center'>
            <div className='contTitleCart my-4'>
                <div className='rowCartTitle row'>
                    <h1 className='col-10'>Tu Carrito</h1>
                    {showComp === false && <button onClick={myCart.clear} type="button" className="btn btn-primary col-2 btnClear" >Borrar Carrito</button>}
                </div>
            </div>

            {showComp ?
                <div>
                    <h2 className='textNoCart'>No hay productos agregados</h2>
                    <Link to="/gameShop-Lucas-Vasquez/"><button type="button" className="btn btn-primary">Seguir comprando</button>
                    </Link>
                </div>
                : <>
                    <div className=' container-xxl'>
                        {myCart.cartList.map(producto => <ProductContainer key={producto.id} product={producto} btnAction={myCart.borrar} />)}
                    </div>
                    <div className='finalPriceBox container-xxl'>
                        <p className='pFinalText'>Total: $ {new Intl.NumberFormat('es-MX').format(myCart.getFinalPrice())}</p>
                    </div>
                </>}


        </div>
    )
}

export default Cart;