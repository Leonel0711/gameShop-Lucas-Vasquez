import React from 'react'
import { useState, useContext } from 'react';
import ItemCount from './ItemCount'
import { Link } from "react-router-dom"
import { CartContext } from './CartContext';

function ItemDetail({ producto }) {
    const [contador, setContador] = useState(0);
    const myContext = useContext(CartContext);
    //Function to add a quantity and product to cartList
    const onAdd = (count) => {
        setContador(count)
        myContext.addItem(producto, count);
    }
    return (
        <div id={producto.id} className='fatherDetail container-lg'>
            <div className='imgDetail'>
                <img src={producto.img} alt={producto.title} />
            </div>
            <div className='productDetail'>
                <p className='titleDetail'>{producto.title}</p>
                <p className='stockDetail'>Stock disponible: {producto.stock}</p>
                <p >Precio : <span className='priceDetail'>${new Intl.NumberFormat('es-MX').format(producto.precio)}</span> </p>
                <p >Marca: <span className='brandDetail'>{producto.marca}</span></p>
                <p>{producto.description}</p>
                <div className='countDetail'>
                    {contador === 0 ? <ItemCount stock={producto.stock} initial={contador} onAdd={onAdd}></ItemCount> :
                        <Link to="/gameShop-Lucas-Vasquez/cart">
                            <button type="button" className="btn btn-primary">Finalizar compra</button>
                        </Link>
                    }

                </div>
            </div>
        </div>

    )
}

export default ItemDetail