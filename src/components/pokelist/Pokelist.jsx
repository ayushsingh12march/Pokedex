import React from 'react'
import './pokelist.css'
import { Pokecard } from '../pokecard/Pokecard'

export const Pokelist = ({ pokemons, handlePokeSearch, handleClick }) => {
  // console.log(pokemons)
  return (
    <div className="pokelist">

      {/* <Pokecard pokemons={pokemons} /> */}
      {
        pokemons.map(pokemon => {

          let sprite = null;
          try {
            sprite = JSON.parse(pokemon.sprites)   //when using string into our js file, parse it
            sprite = sprite.normal
            // console.log('FRom Pokelist', sprite)
          } catch (error) { }

          return pokemon.name
            ? <Pokecard
              handleClick={handleClick}
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprite={sprite} />
            : null
        })
      }
    </div>
  )
}
