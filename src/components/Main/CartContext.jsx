import { createContext, useState } from "react";
export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const getAmountProds = () => {
        let amountProds = cartList.map(item => item.amount);
        return amountProds.reduce((acumulador, amount) => acumulador += amount, 0);
    }
    const getProdPrice = (id) => {
        let pricePerAmount = cartList.find((prod) => prod.id === id);
        return (pricePerAmount.amount * pricePerAmount.precio)
    }
    const getFinalPrice = () => {
        let pricePerAmount = cartList.map(item => (item.precio * item.amount));
        return pricePerAmount.reduce((acumulador, precioXProd) => acumulador += precioXProd, 0);
    }
    //Revisa si el objeto esta en el carrito
    const isInCart = (id) => {
        return cartList.find(producto => id === producto.id);
    }
    //Añade el objeto y le agrega su cantidad, si esta en el carro aumenta solo la cantidad
    const addItem = (product, amount) => {
        if (isInCart(product.id) === undefined) {
            product.amount = amount;
            setCartList([...cartList, product]);
        } else product.amount += amount;
    }
    //Borra al producto del carrito
    const borrar = (id) => {
        setCartList(cartList.filter(product => product.id !== id));
    }
    //Limpia todo el carrito
    const clear = () => {
        setCartList([]);
    }
    return (
        <CartContext.Provider value={{ cartList, addItem, borrar, clear, getFinalPrice, getProdPrice, getAmountProds }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;