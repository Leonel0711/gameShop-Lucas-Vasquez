import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from 'react'
import dataFromDB from '../../utils/dataBase'
import fetchData from '../../utils/fetchData'
function ItemListContainer({ title }) {
    const onAdd = (count) => {
        alert(`Se añadio ${count} productos`);
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData(2000, dataFromDB)
            .then(result => setData(result))
            .catch(err => console.log(err))
        setData(dataFromDB)
    }, [])
    return (<>
        <h1 className="text-center">{title}</h1>
        <section className="container-lg containerProducts ">
            <ItemList data={data}></ItemList>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemCount stock={0} initial={1} onAdd={onAdd} />
        </section>
    </>
    )
}
export default ItemListContainer;