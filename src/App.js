import Navbar from "./components/Navbar/Navbar";
import "./components/Main/main.css"
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Main/ItemListContainer";
import ItemDetailContain from "./components/Main/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./components/Main/Cart";
import CartContextProvider from "./components/Main/CartContext";
import LoginContainer from "./components/Main/LoginContainer";

//Funcion compiladora de los componentes creados
function App() {
  return (
    <>
      <CartContextProvider>
        {/* eL BrowserRouter contiene los componentes para mostrar */}
        <BrowserRouter>
          <Navbar />
          <main>
            {/* Routes contiene los componentes a mostrar con sus respectivas rutas, los : hacen referencia a que es cambiante esa parte */}
            <Routes>
              {/* Route es recibe el path que es la direccion y element que es el componente a mostrar en esa direccion */}
              <Route path="/gameShop-Lucas-Vasquez/" element={<ItemListContainer />} />
              <Route path="/gameShop-Lucas-Vasquez/:categoria" element={<ItemListContainer />} />
              <Route path="/gameShop-Lucas-Vasquez/:categoria/:id" element={<ItemDetailContain />} />
              <Route path="/gameShop-Lucas-Vasquez/cart" element={<Cart />} />
              <Route path="/gameShop-Lucas-Vasquez/user/:action" element={<LoginContainer />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>

    </>
  );
}

export default App;
