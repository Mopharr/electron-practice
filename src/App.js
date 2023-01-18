import Home from "./Pages/home";
import Details from "./Pages/details";
import {
  Routes,
  Route,
  useNavigate,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Root() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    for (let i = 1; i <= 20; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => {
        setLoading(false);
        pokemon.push(res?.data);
      });
    }
  }, []);

  const navigate = useNavigate();
  const handleClick = (item) => {
    console.log(item);
    setPokemonDetail(item);

    navigate("/details");
  };



  if (loading) return "Loading...";
  return (
      <Routes>
        <Route
          e
          path="/"
          element={
            <Home
              pokemon={pokemon}
              setPokemon={setPokemon}
              handleClick={handleClick}
            />
          }
        />
        <Route
          exact
          path="/details"
          element={<Details pokemonDetail={pokemonDetail} />}
        />
      </Routes>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}
export default App



