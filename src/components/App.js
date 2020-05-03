import React from 'react';
import { Pokedex } from './pokedex/Pokedex'
import './App.css';
import { pokemonData } from '../data/pokemonData'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      pokemons: [],
      selectedPokemon: null,
    }
  }
  componentDidMount() {
    this.setState({ pokemons: pokemonData })
  }
  handlePokeSearch = (searchVal) => {
    this.setState({ searchField: searchVal });
  }
  handleClick = name => {
    // alert(name)
    let { pokemons } = this.state

    let selectedPokemon = pokemons.find(pokemon => pokemon.name === name);
    console.log("in handle Click , after find method result", selectedPokemon)
    this.setState({ selectedPokemon: selectedPokemon })
    // console.log(this.selectedPokemon)

  }
  render() {
    const { pokemons, searchField } = this.state
    let searchedPokemons = pokemons.filter((pokemon) => {
      return pokemon.name
        ? pokemon.name.toLowerCase().includes(searchField.toLowerCase()) :
        false
    })
    return (
      <div className="App">
        <h1>Pokedex</h1>
        {console.log("in App", this.selectedPokemon)}
        <Pokedex
          pokemons={searchedPokemons}
          handlePokeSearch={this.handlePokeSearch}
          handleClick={this.handleClick}
          selectedPokemon={this.state.selectedPokemon}
        />
      </div>
    )
  }
}

export default App;
