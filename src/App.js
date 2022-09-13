import Navbar from "./components/Navbar/Navbar";
import "./components/Main/main.css"
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Main/ItemListContainer";
import ItemDetailContain from "./components/Main/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
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
