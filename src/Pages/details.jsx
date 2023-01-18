import React from "react";

const details = ({ pokemonDetail }) => {
  return (
    <>
      <h1>Pokemon Detail</h1>
      <div className="details">
        <div className="detailsCap">
          <div className="detailsImage">
            <img src={pokemonDetail?.sprites?.front_default} alt="" />
          </div>

          <div className="detailsText">
            <span className="name">Name: {pokemonDetail?.name}</span>
            <p>Expirence: {pokemonDetail?.base_experience}</p>
            <p>
              Abilities:
              {pokemonDetail.abilities.map((pokeAbility, index) => (
                <span>{pokeAbility?.ability.name}, </span>
              ))}
            </p>
            <p>
              Move:
              {pokemonDetail.moves.map((pokeAbility, index) => (
                <span>{pokeAbility?.move.name}, </span>
              ))}
            </p>

            <h2>More Picture:</h2>
            <div className="imageList">
              <img src={pokemonDetail?.sprites?.back_default} alt="" />
              <img src={pokemonDetail?.sprites?.back_female} alt="" />
              <img src={pokemonDetail?.sprites?.back_shiny} alt="" />
              <img src={pokemonDetail?.sprites?.front_female} alt="" />
              <img src={pokemonDetail?.sprites?.front_shiny} alt="" />
              <img src={pokemonDetail?.sprites?.front_shiny_female} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default details;
