import React from "react";
import "./style.css";

const Card = props => (
  <div className="Card">
    <img
      alt={props.name}
      src={props.image}
      onClick={() => props.PictureCli(props.id)}
    />
  </div>
);

export default Card;
