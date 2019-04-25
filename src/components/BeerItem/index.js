import React from "react";

const BeerItem = ({ name, rating, onClick }) => (
  <div onClick={onClick}>
    <h1>{name}</h1>
    <p>Rating: {rating}</p>
  </div>
);

export default BeerItem;
