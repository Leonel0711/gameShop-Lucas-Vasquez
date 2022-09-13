import React from 'react'
import { Link } from "react-router-dom"

function Item({ id, title, img, marca, precio, categoria }) {
  return (
    <div className="card" id={id} style={{ width: '18rem' }}>
      <div>
        <img src={img} className="card-img-top" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Marca: {marca}</p>
        <p className="card-text">precio: ${precio}</p>
        <Link to={`/gameShop-Lucas-Vasquez/${categoria}/${id}`}>
          <button type="button" className="btn btn-primary">Agregar producto</button>
        </Link>

      </div>
    </div>
  )
}

export default Item