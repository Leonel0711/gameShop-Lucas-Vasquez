import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Swal from 'sweetalert2'

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
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
    //Busca el producto y le agrega una nueva cantidad y retorna el array con la nueva modificacion al objeto
    const addAmountCart = (product, amount) => {
        return cartList.map(item => item.id === product.id ? { ...item, amount: item.amount + amount } : item)
    }
    //Añade el objeto y le agrega su cantidad, si esta en el carro aumenta solo la cantidad
    const addItem = (product, amount) => {
        if (isInCart(product.id) === undefined) {
            product.amount = amount;
            setCartList([...cartList, product]);
        } else setCartList(addAmountCart(product, amount));
        Toastify({
            text: "Se han añadido " + amount + " productos",
            className: "info",
            style: {
                background: "linear-gradient(90deg, rgba(126,195,246,1) 0%, rgba(66,158,249,1) 50%, rgba(4,107,238,1) 100%)"
            }
        }).showToast();

    }
    //Borra al producto del carrito
    const borrar = (id) => {
        setCartList(cartList.filter(product => product.id !== id));
    }
    const removeList = () => {
        setCartList([]);
    }
    //Limpia todo el carrito
    const clear = () => {
        Swal.fire({
            title: '¿Esta seguro?',
            text: "No podra revertirlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Borrado!',
                    'Su compra ha sido borrada.',
                    'success'
                )
                setCartList([]);
            }
        })

    }
    return (
        <CartContext.Provider value={{ cartList, addItem, borrar, clear, getFinalPrice, getProdPrice, getAmountProds, removeList }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;