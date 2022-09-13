import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import dataFromDB from '../../utils/dataBase'
import getData from '../../utils/getData';
import ItemDetail from './ItemDetail';

function ItemDetailContain() {


    const [data, setData] = useState({});
    const { categoria } = useParams();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getData(2000, dataFromDB.find((element) => element.id == id))
                .then(result => setData(result))
                .catch(err => console.log(err))
        }

    }, [id, categoria])
    return (
        <div>
            <ItemDetail producto={data} />
        </div>
    )
}

export default ItemDetailContain