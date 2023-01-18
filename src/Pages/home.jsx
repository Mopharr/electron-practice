import React from "react";

function Home({ pokemon, handleClick }) {
  return (
    <>
      <h1>Pokemon List</h1>
      <ul className="list">
        {pokemon.map((item, index) => (
          <li key={index}>
            <div className="image">
              <img src={item?.sprites?.front_default} alt="" />
            </div>
            <p>
              {item?.id}. {item?.name}  
            </p>
            <button onClick={() => handleClick(item)}>View</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
