import React from "react";


const Card = props => (
  <div className="Card">
    <img
      alt={props.name}
      src={props.image}
      onClick={() => props.cardClick(props.id)}
    />
  </div>
);

export default Card;
