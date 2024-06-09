// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { ProductsProvider } from './components/ProductsContext/ProductsContext.jsx'; // Importar el proveedor

const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
};

export default App;
