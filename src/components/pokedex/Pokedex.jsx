import React from 'react'
import './pokedex.css'
import { Pokelist } from '../pokelist/Pokelist'
import { PokeSearchResult } from '../pokeSearchResult/PokeSearchResult'
import { Searchbox } from '../searchbox/Searchbox'
export const Pokedex = ({ pokemons, handlePokeSearch, handleClick, selectedPokemon }) => { //destructuring in JS
  // console.log('selected pokemon', selectedPokemon)
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        {/* {
          pokemons.map(pokemon => <p>{pokemon.name}</p>)
        } */}
        <Searchbox handlePokeSearch={handlePokeSearch} />
        <Pokelist
          pokemons={pokemons}
          handlePokeSearch={handlePokeSearch}
          handleClick={handleClick}
        />
      </div>
      {/* if it is not null only then we pass, why? */}
      <div className="pokesearchresult-container">

        {
          console.log(selectedPokemon)
        }
        {
          selectedPokemon
            ? <PokeSearchResult
              showResult={true}
              name={selectedPokemon.name}
              id={selectedPokemon.id}
              sprites={JSON.parse(selectedPokemon.sprites).animated}
              weight={selectedPokemon.weight}
              height={selectedPokemon.height}
            />
            : <PokeSearchResult
              showResult={false} />
        }

      </div>

    </div>
  );
}
