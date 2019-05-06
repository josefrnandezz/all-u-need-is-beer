import React from "react";
import styled from 'styled-components';
import { Divider, Header, Icon, Button, Table, Segment, Grid } from 'semantic-ui-react';

const Image = styled.img`
    margin-left: 100px;
    margin-top: 75px;
    height: 400px;
    width: 150px;
    margin: auto
`;

const BeerDetail = ({
  location: {
    state: { beer, country }
  },
  history
}) => (
  <div>
    <Segment>
        <Grid columns={2} relaxed='very' >
            <Grid.Column>
                <p>
                    <Image src={beer.image_url} />
                </p>
            </Grid.Column>
            <Grid.Column>
                <React.Fragment>
                    <Divider horizontal>
                        <Header as='h4'>
                            <Icon name='tag' />
                            Description
                        </Header>
                    </Divider>

                    <p>{beer.description}</p>

                    <Divider horizontal>
                        <Header as='h4'>
                            <Icon name='bar chart' />
                            Specifications
                        </Header>
                    </Divider>
                    <Table definition celled>
                        <Table.Body>
                            <Table.Row>
                            <Table.Cell width={2}>Origin</Table.Cell>
                            <Table.Cell>{country.name}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell >Alcohol by Volume</Table.Cell>
                            <Table.Cell>{beer.abv} º</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>Food Pairing</Table.Cell>
                            <Table.Cell>{beer.food_pairing[0]}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>Yeast</Table.Cell>
                            <Table.Cell>{beer.ingredients.yeast}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </React.Fragment>
            </Grid.Column>
        </Grid>
        <Divider vertical/>
    </Segment>

    <Button onClick={history.goBack}>Volver </ Button>
  </div>
);

export default BeerDetail;
