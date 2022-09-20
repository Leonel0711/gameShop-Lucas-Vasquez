import ItemList from "./ItemList";
import { useEffect, useState } from 'react'
import dataFromDB from '../../utils/dataBase'
import fetchData from '../../utils/fetchData'
import { useParams } from "react-router-dom";
import Loading from "./LazyLoading";
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
        //verifica si hay una categoria en la ruta
        if (categoria) {
            //si hay devuelve un array con los elementos que tengan esa categoria y le pasa a ItemList
            fetchData(2000, dataFromDB.filter(producto => producto.category === categoria))
                .then(result => {
                    setTitle(categoria + " Gamer")
                    setData(result)
                    setShowComp(false);
                })
        } else {
            //sino devuelve un array con todos los productos para pasarlo a ItemList
            fetchData(2000, dataFromDB)
                .then(result => {
                    setTitle("Perifericos Gamer")
                    setData(result);
                    setShowComp(false);
                })
        }
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