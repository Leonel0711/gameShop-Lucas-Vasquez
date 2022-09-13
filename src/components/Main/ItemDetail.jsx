import React from 'react'
import ItemCount from './ItemCount'
function ItemDetail({ producto }) {
    //variable para generar un numero random para el stock(no es del desafio esto)
    let randomStock = Math.floor(Math.random() * 50);
    //funcion onAdd del desafio ItemCount para pasar por props a ItemCount y que muestre por alert la cantidad añadida de producto
    const onAdd = (count) => {
        alert(`Se añadio ${count} productos`);
    }
    //Este componente muestra el objeto recibido por props.
    return (
        <div id={producto.id} className='fatherDetail container-lg'>
            <div className='imgDetail'>
                <img src={producto.img} alt={producto.title} />
            </div>
            <div className='productDetail'>
                <p className='titleDetail'>{producto.title}</p>
                <p className='stockDetail'>Stock disponible: {randomStock}</p>
                <p >Precio : <span className='priceDetail'>${producto.precio}</span> </p>
                <p >Marca: <span className='brandDetail'>{producto.marca}</span></p>
                <p>{producto.description}</p>
                <div className='countDetail'>
                    <ItemCount stock={randomStock} initial={1} onAdd={onAdd}></ItemCount>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail