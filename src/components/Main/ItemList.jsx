import React from 'react'
import Item from './Item';
function ItemList({ data }) {
  return (
    <div id='itemList'>
      {data.map(item => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          marca={item.marca}
          precio={item.precio}
        />
      ))}
    </div>

  )
}

export default ItemList