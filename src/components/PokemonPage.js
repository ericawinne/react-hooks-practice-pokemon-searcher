import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [ pokemon, setPokemon ] = useState([])
  const [ searchKeyword, setSearchKeyword ] = useState("")
  const filteredPokemon = pokemon.filter((poke) => {
    if (searchKeyword === "") {
      return true
    } 
    else if (poke.name.toLowerCase().includes(searchKeyword.toLowerCase())) {
      return true 
    } else {
      return false
    }
  })

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value)
  }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(resp => resp.json())
      .then(data => setPokemon(data))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon} />
      <br />
      <Search onSearchChange={handleSearchChange} searchKeyword={searchKeyword} />
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
