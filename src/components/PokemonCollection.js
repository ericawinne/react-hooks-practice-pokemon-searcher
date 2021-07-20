import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const listOfPokemon = pokemon.map((mon) => {
  return (
    <PokemonCard 
      key={mon.id}
      name={mon.name}
      hp={mon.hp}
      sprites={mon.sprites}
    />
  )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {listOfPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
