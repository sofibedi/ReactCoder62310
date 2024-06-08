import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/ropa" element={<ItemListContainer category="ropa" />} />
        <Route path="/electronica" element={<ItemListContainer category="electronica" />} />
        <Route path="/libros" element={<ItemListContainer category="libros" />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
