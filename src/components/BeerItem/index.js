import React from "react";
import { Card, Rating, Flag } from "semantic-ui-react";
import styled from "styled-components";

const Image = styled.img`
  width: 50px;
  height: 150px;
  margin-bottom: 10px;
  margin: auto;
`;

const Container = styled(Card) `
  width: auto;
  heigth: auto;
`;

const BeerItem = ({ name, onClick, image, country }) => (
  <Container onClick={onClick} color="yellow">
    <Image src={image} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <Rating icon="star" defaultRating={Math.floor((Math.random() * 10) + 1)} maxRating={5} />
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Flag name={country.alpha2Code.toLowerCase()} />
        {country.name}
      </a>
    </Card.Content>
  </Container>
);

export default BeerItem;