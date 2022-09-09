import React from 'react'

function Item({ id, title, img, marca, precio }) {
  return (
    <div className="card" id={id} style={{ width: '18rem' }}>
      <div>
        <img src={img} className="card-img-top" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Marca: {marca}</p>
        <p className="card-text">precio: ${precio}</p>
        <button type="button" className="btn btn-primary">Agregar producto</button>
      </div>
    </div>
  )
}

export default Item