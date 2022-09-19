import React from 'react'
import { Link } from "react-router-dom"

function Item({ id, title, img, marca, precio, categoria }) {
  //Recibe los datos y devuelve un componente con esos datos
  return (
    <div className="card" id={id} >
      <div>
        <img src={img} className="card-img-top" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Marca: {marca}</p>
        <p className="card-text">precio: ${new Intl.NumberFormat('es-MX').format(precio)}</p>
        <Link to={`/gameShop-Lucas-Vasquez/${categoria}/${id}`}>
          <button type="button" className="btn btn-primary">Agregar producto</button>
        </Link>

      </div>
    </div>
  )
}

export default Item