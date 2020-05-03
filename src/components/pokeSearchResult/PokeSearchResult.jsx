import React from 'react'

import './poke-search-result.css'

export const PokeSearchResult = ({ showResult, name, sprites, id, height, weight }) => {
  // console.log(selectedPokemon)
  return (
    <div className="poke-result-card">
      {
        showResult
          ? <div>
            <img className="pokemon-animated-sprite" alt="pokemon" src={sprites} />
            <p>id : {id}</p>
            <p>name : {name}</p>
            <p>height : {height}</p>
            <p>weight : {weight}</p>
          </div>
          : <h2>Welcome to the Pokedex</h2>
      }
    </div>
  )
}
