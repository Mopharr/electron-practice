import React from "react";

function Home({ pokemon }) {
  return (
    <>
      <h1>Pokemon List</h1>
      <ul className="list">
        {pokemon.map((item) => (
          <li key={item.id}>
            <div className="image">
              <img src={item.sprites.front_default} alt="" />
            </div>
            <p>
              {item.id}. {item.name}
            </p>

            <button>View</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
