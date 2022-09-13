import ItemList from "./ItemList";
import { useEffect, useState } from 'react'
import dataFromDB from '../../utils/dataBase'
import fetchData from '../../utils/fetchData'
import { useParams } from "react-router-dom";
function ItemListContainer({ title }) {

    const [data, setData] = useState([]);
    const { categoria } = useParams();
    useEffect(() => {
        if (categoria) {
            fetchData(2000, dataFromDB.filter(producto => producto.category === categoria))
                .then(result => setData(result))
                .catch(err => console.log(err))
        } else {
            fetchData(2000, dataFromDB)
                .then(result => setData(result))
                .catch(err => console.log(err))

        }

    }, [categoria])
    return (<>
        <h1 className="text-center">{title}</h1>
        <section className="container-lg containerProducts ">
            <ItemList data={data}></ItemList>
        </section>
    </>
    )
}
export default ItemListContainer;