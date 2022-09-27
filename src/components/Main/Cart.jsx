import { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import ProductContainer from './ProductContainer';
import { db } from '../../utils/fireBase'
import { doc, setDoc, updateDoc, serverTimestamp, collection, increment } from "firebase/firestore";
import { SesionContext } from "./SesionContext";
import Swal from 'sweetalert2'

function Cart() {
    let navigate = useNavigate();

    const [showComp, setShowComp] = useState(true);

    const [showLoading, setShowLoading] = useState(true)
    const myCart = useContext(CartContext);
    const sesion = useContext(SesionContext);
    //Create the order to database.
    const createOrder = async () => {
        //Verify if there are someuser
        if (sesion.user) {
            const itemsOrder = myCart.cartList.map(item => ({
                id: item.id,
                title: item.title,
                price: item.precio,
                quantity: item.amount
            }))
            const order = {
                buyer: sesion.user,
                items: itemsOrder,
                date: serverTimestamp(),
                total: myCart.getFinalPrice(),
            }
            //Send the order to database.
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);
            //Update the stock of products
            myCart.cartList.forEach(async (product) => {
                const itemRef = doc(db, "products", product.id)
                await updateDoc(itemRef, {
                    stock: increment(-product.amount)
                });
            });
            myCart.removeList()
            Swal.fire(
                'Compra Realizada',
                'Su compra se realizo con exito',
                'success'
            )
            setShowLoading(true);
        } else {
            Swal.fire(
                'Log In',
                'Ingrese a su cuenta para continuar con su compra',
                'error'
            )
            navigate("/gameShop-Lucas-Vasquez/user/login", { replace: true });
        }

    }

    useEffect(() => {
        myCart.cartList.length === 0 ? setShowComp(true) : setShowComp(false)
    }, [myCart.cartList])
    return (
        <div className='mainCarrito text-center'>
            {showLoading ?
                <>
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
                                <button type="button" className="btn btn-primary" onClick={() => {
                                    setShowLoading(false);
                                    createOrder();
                                }}>Crear Orden</button>
                            </div>
                        </>}
                </> :
                <><div className='contDad'>
                    <div>
                        <h1 className='textLoading2'>Cargando Compra...</h1>
                    </div>
                    <div className='spinner'></div>
                </div></>
            }


        </div>
    )
}

export default Cart;