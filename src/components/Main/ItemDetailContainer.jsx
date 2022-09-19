import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import dataFromDB from '../../utils/dataBase'
import getData from '../../utils/getData';
import ItemDetail from './ItemDetail';

function ItemDetailContain() {
    //variables para editar un array a pasar por un filtro y pasar un solo objeto al componente ItemDetail
    const [data, setData] = useState({});
    //variable para recibir la categoria de la ruta de navegacion
    const { categoria } = useParams();
    //variable para recibir el id de la ruta de navegacion y usarlo para identificar nuestro producto a mostrar
    const { id } = useParams();
    //actualiza el contenido del container si se altera la ruta de navegacion.
    useEffect(() => {
        //verifica si hay un id en la ruta
        if (id) {
            //si hay devuelve un objeto con el id que se muestra en la ruta. y lo setea en la variable data.
            getData(2000, dataFromDB.find((element) => element.id == id))
                .then(result => setData(result))
        }
    }, [id, categoria])
    console.log(data.id)
    return (
        <>
            {
                data.id === undefined ? <p className="text-center fs-1">...Cargando</p> : <div>
                    <ItemDetail producto={data} />
                </div >
            }
        </>


    )
}

export default ItemDetailContain