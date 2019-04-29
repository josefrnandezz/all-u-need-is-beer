import React from "react";
import { Card, Image } from "semantic-ui-react";

const BeerItem = ({ name, rating, onClick, image }) => (
  <Card onClick={onClick}>
    <Image src={image} height="100" width="30" />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{rating}</Card.Meta>
    </Card.Content>
  </Card>
);

export default BeerItem;