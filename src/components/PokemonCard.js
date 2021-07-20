import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {
  const [ isFlipped, setIsFlipped ] = useState(false)
  const handleFlip = () => {
    setIsFlipped(!isFlipped) 
    console.log("hello from the other side")
  }
  // const imageSrc = () => {
  //   if (isFlipped === true) {
  //     return sprites.back 
  //   } else {
  //     return sprites.front
  //   }
  //}

  return (
    <Card>
      <div onClick={handleFlip} >
        <div className="image">
          <img src={ isFlipped ? sprites.back : sprites.front } alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
