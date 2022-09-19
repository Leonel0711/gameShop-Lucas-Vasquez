import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

function ProductContainer({ product, btnAction }) {
    return (
        <div className='row boxCart'  >
            <div className="col-12 col-md-2 subContainer" ><img src={product.img} alt={product.title} className='imgStyel' /></div>
            <div className="col-12 col-md-5 subContainer" ><p className='titleCartP'>{product.title}</p></div>
            <div className="col-12 col-md-2 subContainer" ><p className='countCartP'>Cantidad: {product.amount}</p></div>
            <div className="col-12 col-md-2 subContainer" ><p className='priceCartP'>${new Intl.NumberFormat('es-MX').format(product.precio)}</p></div>
            <div className="col-12 col-md-1 subContainer" ><button onClick={() => { btnAction(product.id) }} type="button" className="btn btn-primary"><FaTrashAlt></FaTrashAlt></button></div>
        </div>
    )
}

export default ProductContainer