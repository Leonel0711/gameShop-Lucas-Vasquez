import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from "./LazyLoading";
import { doc, DocumentSnapshot, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../utils/fireBase'

function ItemDetailContain() {
    const [showComp, setShowComp] = useState(true);
    //variables para editar un array a pasar por un filtro y pasar un solo objeto al componente ItemDetail
    const [data, setData] = useState({});
    //variable para recibir la categoria de la ruta de navegacion
    const { categoria } = useParams();
    //variable para recibir el id de la ruta de navegacion y usarlo para identificar nuestro producto a mostrar
    const { id } = useParams();
    //actualiza el contenido del container si se altera la ruta de navegacion.
    useEffect(() => {

        setShowComp(true);
        async function fetchData() {
            /* const producto = doc(db, `products/${id}`)
            onSnapshot(producto, (docSnapshot) => {
                if (docSnapshot.exists()) {
                    const docData = docSnapshot.data();
                    const prod = JSON.parse(JSON.stringify(docData));
                    prod.id = id;
                    setData(prod);
                }
            }) */
            const docSnap = await getDoc(doc(db, 'products', id))
            let prod = { id: id, ...docSnap.data() }
            setData(prod)
            setShowComp(false);
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