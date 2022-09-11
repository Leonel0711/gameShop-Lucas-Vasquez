import React from 'react'
import { useEffect, useState } from 'react'
import dataFromDB from '../../utils/dataBase'
import getData from '../../utils/getData';
import ItemDetail from './ItemDetail';

function ItemDetailContain() {


    const [data, setData] = useState({});
    useEffect(() => {
        let randomProd = Math.floor(Math.random() * 12);
        getData(2000, dataFromDB)
            .then(result => setData(result[randomProd]))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <ItemDetail producto={data} />
        </div>
    )
}

export default ItemDetailContain