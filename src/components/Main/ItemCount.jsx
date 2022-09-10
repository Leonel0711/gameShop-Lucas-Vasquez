import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const tStock = stock >= 1 ? true : false;
    const [count, setCount] = useState(initial);
    const handlerPlus = () => {
        count < stock && setCount(count + 1);
    }
    const handlerMinus = () => {
        count > initial && setCount(count - 1);
    }

    return (< >
        <div className="d-flex modalGroup  ">
            <div className="modalButton l_button" onClick={handlerMinus} >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" data-testid="remove">
                    <path fill="#4f92f6 " d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z">
                    </path>
                </svg>
            </div>
            <div className="number">
                <span color="graya100" data-testid="typography" id="cont_Numb" >{count}</span>
            </div>
            <div className="modalButton r_button" onClick={handlerPlus} >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" data-testid="add">
                    <path fill="#4f92f6 " d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z">
                    </path>
                </svg>
            </div>
        </div>
        <div className="btnsAdd">
            <button onClick={() => { tStock === true ? onAdd(count) : alert("No hay Stock"); }}>Agregar al carrito</button>
        </div>
    </>)
}



export default ItemCount;