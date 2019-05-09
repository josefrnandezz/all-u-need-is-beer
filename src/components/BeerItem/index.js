import React from "react";
import { Card, Rating, Flag } from "semantic-ui-react";
import styled from "styled-components";

const Image = styled.img`
  width: 50px;
  height: 150px;
  margin-bottom: 10px;
  margin: auto;
`;

const Container = styled(Card)`
  width: auto;
  heigth: auto;
`;

function shortenName (name) {
  if (name.length > 25) {
    name = name.substr(0, 25) + " ...";
  }

  return name;
}

const BeerItem = ({ name, onClick, image, beerInfo }) => (
  <Container onClick={onClick} color="yellow">
    <Image src={image} />
    <Card.Content>
      <Card.Header>{shortenName(name)}</Card.Header>
      <Card.Meta>
        <Rating disabled="true" icon="star" rating={beerInfo.rating} maxRating={5} />
      </Card.Meta>
      <Card.Description>
        <b>{beerInfo.price} €</b>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p>
        <Flag name={beerInfo.code} />
        {beerInfo.country_name}
      </p>
    </Card.Content>
  </Container>
);

export default BeerItem;