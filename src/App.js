import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Context from './Context.js';

import Navbar from "./components/Navbar.jsx"
import Home from "./views/Home.jsx"
import Favoritos from "./views/Favoritos.jsx"

export default function App() {
  const [fotos, setFotos] = useState([]);

  const endpoint = "/fotos.json";

  const getFotosNaturales = async () => {
    const res = await fetch(endpoint);
    let data = await res.json();
    let dataFiltrada = data.photos.map((elem) => ({
      id: elem.id,
      src: elem.src.tiny,
      desc: elem.alt,
      favorito: false
    }));
    setFotos(dataFiltrada);
  };

  useEffect(() => {
    getFotosNaturales();
  }, []);
  console.log(fotos)

  return (
    <div className="App">
      <Context.Provider value={{ fotos, setFotos }}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favoritos" element={<Favoritos />} />

          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

