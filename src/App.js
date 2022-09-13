import Navbar from "./components/Navbar/Navbar";
import "./components/Main/main.css"
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Main/ItemListContainer";
import ItemDetailContain from "./components/Main/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom"

//Funcion compiladora de los componentes creados
function App() {
  return (
    <>
      {/* eL BrowserRouter contiene los componentes para mostrar */}
      <BrowserRouter>
        <Navbar />
        <main>
          {/* Routes contiene los componentes a mostrar con sus respectivas rutas, los : hacen referencia a que es cambiante esa parte */}
          <Routes>
            {/* Route es recibe el path que es la direccion y element que es el componente a mostrar en esa direccion */}
            <Route path="/gameShop-Lucas-Vasquez/" element={<ItemListContainer title="Perifericos Gamer" />} />
            <Route path="/gameShop-Lucas-Vasquez/:categoria" element={<ItemListContainer title="Perifericos Gamer" />} />
            <Route path="/gameShop-Lucas-Vasquez/:categoria/:id" element={<ItemDetailContain />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
