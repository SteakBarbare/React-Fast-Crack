import { useState, useEffect } from "react";

function Pokeapi() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/ditto";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        setPokemonData(result);
        console.log(result);
      });
  }, []);

  return (
    <>
      <div>Pokemon Id {pokemonData.id}</div>
      <h3>Pokemon name {pokemonData.name}</h3>
      <img src={pokemonData.sprites.front_default} />
    </>
  );
}

export default Pokeapi;
