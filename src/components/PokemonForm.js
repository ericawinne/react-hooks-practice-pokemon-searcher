import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemon, setPokemon }) {
  const [ formData, setFormData ] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })
  const handleFormDataChange = (event) => {
    const keyToBeUpdated = event.target.name
    const valueToBeUpdated = event.target.value
    setFormData({...formData, [keyToBeUpdated] : valueToBeUpdated })
    // setFormData({...formData, [event.target.name] : event.target.value})
  }
  const handlePokemonFormSubmit = () => {
    fetch("http://localhost:3001/pokemon",
      {method: "POST",
      headers: {"Content-Type" : "Application/json"},
      body: JSON.stringify({
        name: formData.name,
        hp: formData.hp,
        sprites: {
          front: formData.frontUrl,
          back: formData.backUrl
          }
      })
    })
      .then(resp => resp.json())
      .then(data => setPokemon([...pokemon, data]))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handlePokemonFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            value={formData.name}
            onChange={handleFormDataChange}
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" />
          <Form.Input 
            value={formData.hp}
            onChange={handleFormDataChange}
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" />
          <Form.Input
            value={formData.frontUrl}
            onChange={handleFormDataChange} 
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            value={formData.backUrl}
            onChange={handleFormDataChange} 
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
