import Home from "./Pages/home";
import Details from "./Pages/details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    for (let i = 1; i <= 20; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => {
        setLoading(false);
        pokemon.push(res.data);
      });
    }
  }, []);
  const handleClick = (id) => {};

  if (loading) return "Loading...";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          e
          path="/"
          element={<Home pokemon={pokemon} setPokemon={setPokemon} />}
        />
        <Route exact path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
