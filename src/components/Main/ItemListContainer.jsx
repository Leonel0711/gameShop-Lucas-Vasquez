import ItemList from "./ItemList";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Loading from "./LazyLoading";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from '../../utils/fireBase'
import { animateScroll as scroll } from 'react-scroll';
//Contanedor de todos los productos a mostrar, recibe la base de datos y la funcion FetchData
function ItemListContainer() {
    scroll.scrollToTop();
    const [showComp, setShowComp] = useState(true);
    const [title, setTitle] = useState("Periféricos Gamer");
    //variable that content an Array with data of products
    const [data, setData] = useState([]);
    //variable to find some data from database
    const { categoria } = useParams();

    useEffect(() => {
        setShowComp(true);
        //Get data of products from the dataBase depend of category
        async function fetchData() {
            if (categoria) {
                const q = query(collection(db, "products"), where('category', '==', categoria))
                const querySnapshot = await getDocs(q);
                const products = querySnapshot.docs.map(item => ({
                    id: item.id,
                    ...item.data()
                }))
                setData(products)
                setTitle(categoria)
            } else {
                const querySnapshot = await getDocs(collection(db, "products"));
                const products = querySnapshot.docs.map(item => ({
                    id: item.id,
                    ...item.data()
                }))
                setData(products)
                setTitle("Periféricos Gamer")
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