import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from "./LazyLoading";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/fireBase'

function ItemDetailContain() {
    const [showComp, setShowComp] = useState(true);
    //variables para editar un array a pasar por un filtro y pasar un solo objeto al componente ItemDetail
    const [data, setData] = useState({});
    //variable to find one product from database
    const { id } = useParams();
    useEffect(() => {
        setShowComp(true);
        //Get data of one product from the dataBase depend of id
        async function fetchData() {
            const docSnap = await getDoc(doc(db, 'products', id))
            let prod = { id: id, ...docSnap.data() }
            if (prod.title !== undefined) {
                setData(prod)
                setShowComp(false);
            }
        }
        fetchData()
    }, [id])
    return (
        <>
            {
                showComp ? <Loading /> : <div>
                    <ItemDetail producto={data} />
                </div >
            }
        </>
    )
}

export default ItemDetailContain