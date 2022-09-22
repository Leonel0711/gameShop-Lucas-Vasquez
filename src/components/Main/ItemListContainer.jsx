import ItemList from "./ItemList";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Loading from "./LazyLoading";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from '../../utils/fireBase'
//Contanedor de todos los productos a mostrar, recibe la base de datos y la funcion FetchData
function ItemListContainer() {
    const [showComp, setShowComp] = useState(true);
    //variables para editar un array a pasar por props a ItemList
    const [title, setTitle] = useState("Perifericos Gamer");
    const [data, setData] = useState([]);
    //variable para recibir la categoria de la ruta de navegacion
    const { categoria } = useParams();
    //actualiza el contenido del container si se altera la ruta de navegacion.
    useEffect(() => {
        setShowComp(true);
        async function fetchData() {
            if (categoria) {
                //si hay devuelve un array con los elementos que tengan esa categoria y le pasa a ItemList
                const q = query(collection(db, "products"), where('category', '==', categoria))
                const querySnapshot = await getDocs(q);
                const products = querySnapshot.docs.map(item => ({
                    id: item.id,
                    ...item.data()
                }))
                setData(products)
                setTitle(categoria)
            } else {
                //sino devuelve un array con todos los productos para pasarlo a ItemList
                const querySnapshot = await getDocs(collection(db, "products"));
                const products = querySnapshot.docs.map(item => ({
                    id: item.id,
                    ...item.data()
                }))
                setData(products)
                setTitle("Perifericos Gamer")
            }
            setShowComp(false);
        }
        fetchData()


    }, [categoria])
    return (<>
        {showComp ? <Loading /> :
            <><h1 className="text-center">{title}</h1>
                <section className="container-lg containerProducts ">
                    <ItemList data={data}></ItemList>
                </section></>
        }
    </>
    )
}
export default ItemListContainer;