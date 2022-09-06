import ItemCount from "./ItemCount";
function ItemListContainer() {
    const onAdd = (count)=>{
        alert(`Se añadio ${count} productos`);
    }
    return (<section className="container containerProducts ">
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        <ItemCount stock={0} initial={1} onAdd={onAdd}/>
    </section>
    )
}
export default ItemListContainer;