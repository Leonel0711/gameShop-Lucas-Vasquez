import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Swal from 'sweetalert2'
import { createContext, useState } from "react";

export const CartContext = createContext();
//Context from Cart
const CartContextProvider = ({ children }) => {
    //Array with productos as a cart
    const [cartList, setCartList] = useState([]);

    //Get amunt of products to CartWidget
    const getAmountProds = () => {
        let amountProds = cartList.map(item => item.amount);
        return amountProds.reduce((acumulador, amount) => acumulador += amount, 0);
    }
    //Get the final price for product
    const getProdPrice = (id) => {
        let pricePerAmount = cartList.find((prod) => prod.id === id);
        return (pricePerAmount.amount * pricePerAmount.precio)
    }
    //Get the final price from cartList
    const getFinalPrice = () => {
        let pricePerAmount = cartList.map(item => (item.precio * item.amount));
        return pricePerAmount.reduce((acumulador, precioXProd) => acumulador + precioXProd, 0);
    }
    //Verify if the product is in the cartList
    const isInCart = (id) => {
        return cartList.find(producto => id === producto.id);
    }
    //Add amount to a product in the cartList
    const addAmountCart = (product, amount) => {
        return cartList.map(item => item.id === product.id ? { ...item, amount: item.amount + amount } : item)
    }

    //Add a product to cartlist
    const addItem = (product, amount) => {
        if (isInCart(product.id) === undefined) {
            product.amount = amount;
            setCartList([...cartList, product]);
        } else {
            const arrayTest = addAmountCart(product, amount)
            const productTest = arrayTest.find((item) => item.id == product.id)
            if (productTest.stock >= productTest.amount) {
                setCartList(addAmountCart(product, amount))
            } else {
                Swal.fire('Stock insuficiente', 'No puede ingresara mas cantidad que el stock disponible', 'error')
                return false;
            }
        };
        Toastify({
            text: "Se han añadido " + amount + " productos",
            className: "info",
            style: {
                background: "linear-gradient(90deg, rgba(126,195,246,1) 0%, rgba(66,158,249,1) 50%, rgba(4,107,238,1) 100%)"
            }
        }).showToast();
        return true;
    }
    //Remove one product from cartList
    const borrar = (id) => {
        setCartList(cartList.filter(product => product.id !== id));
    }
    //Clean the cartList
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