import React from "react";
import { Card, Icon } from "semantic-ui-react";
import styled from "styled-components";

const Image = styled.img`
  width: 10%;
  height: 10%;
  object-fit: cover;
  margin-bottom: 10px;
  margin: auto;
`;

const BeerItem = ({ name, rating, onClick, image, country }) => (
  <Card onClick={onClick}>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{rating}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='world' />
        {country}
      </a>
    </Card.Content>
  </Card>
);

export default BeerItem;