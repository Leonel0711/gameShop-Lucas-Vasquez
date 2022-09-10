import React from 'react'
import ItemCount from './ItemCount'
function ItemDetail({ producto }) {
    let stock = 10;
    const onAdd = (count) => {
        alert(`Se añadio ${count} productos`);
    }
    return (
        <div id={producto.id} className='fatherDetail container-lg'>
            <div className='imgDetail'>
                <img src={producto.img} alt={producto.title} />
            </div>
            <div className='productDetail'>
                <p className='titleDetail'>{producto.title}</p>
                <p className='stockDetail'>Stock disponible: {stock}</p>
                <p >Precio : <span className='priceDetail'>${producto.precio}</span> </p>
                <p >Marca: <span className='brandDetail'>{producto.marca}</span></p>
                <p>{producto.description}</p>
                <div className='countDetail'>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail