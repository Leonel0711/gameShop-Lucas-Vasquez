import { createContext, useState } from "react";
export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const isInCart = (id) => {
        return cartList.find(producto => id === producto.id);
    }

    const addItem = (product, amount) => {
        if (isInCart(product.id) === undefined) {
            product.amount = amount;
            setCartList([...cartList, product])
        } else product.amount += amount;

    }
    const borrar = (id) => {
        setCartList(cartList.filter(product => product.id !== id))
    }
    const clear = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{ cartList, addItem, borrar, clear }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;