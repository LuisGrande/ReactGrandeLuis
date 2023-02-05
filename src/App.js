import "./style.css";
import NavBar from "./componentes/header/NavBar";
// import CardItem from "./componentes/items/CardItem";
import ItemListContainer from "./componentes/Main/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./componentes/Main/ItemDetailContainer";
import CustomProvider from "./componentes/Context/CustomProvider";
import Cart from "./componentes/Main/Cart";

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo="Bienvenidos" />}
          />
          <Route
            path="/Categoria/:categoryName"
            element={<ItemListContainer saludo="Productos" />}
          />
          <Route path="/detalle/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
