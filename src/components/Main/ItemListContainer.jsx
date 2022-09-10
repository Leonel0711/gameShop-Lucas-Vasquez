import ItemList from "./ItemList";
import { useEffect, useState } from 'react'
import dataFromDB from '../../utils/dataBase'
import fetchData from '../../utils/fetchData'
function ItemListContainer({ title }) {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData(2000, dataFromDB)
            .then(result => setData(result))
            .catch(err => console.log(err))

    }, [])
    return (<>
        <h1 className="text-center">{title}</h1>
        <section className="container-lg containerProducts ">
            <ItemList data={data}></ItemList>
        </section>
    </>
    )
}
export default ItemListContainer;