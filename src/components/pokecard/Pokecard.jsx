import React from 'react'
import './pokecard.css'

export const Pokecard = ({ id, name, sprite, handleClick }) => {
  // console.log(props.pokemons[0])
  // console.log(sprite)
  return (
    <div className="pokecard" onClick={() => handleClick(name)}>
      {
        // id <= 200
        //   ? <img className="pokemon-sprite" src={sprite} alt="pokemon" />
        //   : null

      }
      <img className="pokemon-sprite" src={sprite} alt="pokemon" />
      <p> {name}</p>

    </div >
  )
}
