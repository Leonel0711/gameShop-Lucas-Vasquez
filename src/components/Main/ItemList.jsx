import React from 'react'
import Item from './Item';

function ItemList({ data }) {
  //Recibe por props un array con los objetos/productos a mostrar.
  return (
    <div id='itemList'>
      {//Usamos map para recorrer el array productos y crear los componentes y luego devolverlos para mostrarlos. ademas de pasar los datos por props
        data.map(item => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            marca={item.marca}
            precio={item.precio}
            categoria={item.category}
          />
        ))}
    </div>

  )
}

export default ItemList