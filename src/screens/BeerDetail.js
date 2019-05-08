import React from "react";
import styled from 'styled-components';
import { Divider, Header, Icon, Button, Table, Segment, Grid, Container } from 'semantic-ui-react';
import DropdownControlled from "../components/DropdownControlled";

const Image = styled.img`
    margin-left: 120px;
    margin-top: 75px;
    height: 400px;
    width: 150px;
`;

const MyContainer = styled(Container)`
    margin: auto;
`;

function getArrivalDate() {
    var today = new Date();
    var dd = String(today.getDate() + 5).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    switch (mm) {
        case "01":
            mm = "January";
            break;

        case "02":
            mm = "February";
            break;

        case "03":
            mm = "March";
            break;

        case "04":
            mm = "April";
            break;

        case "05": 
            mm = "May";
            break;

        case "06":
            mm = "June";
            break;

        case "07":
            mm = "July";
            break;

        case "08":
            mm = "August";
            break;

        case "09":
            mm = "September";
            break;

        case "10":
            mm = "October";
            break;

        case "11":
            mm = "November";
            break;
            
        case "12":
            mm = "December";
            break;
        
        default:
            mm = null;
            break;
    }       

    today = mm + ', ' + dd;
    return today;
}

const BeerDetail = ({
  location: {
    state: { beer, country, price }
  },
  history
}) => (
  <div>
    {window.scrollTo(0,0)}
    <Segment>
        <Grid fluid columns={3} relaxed='very' divided>
            <Grid.Column width={3.5}>
                <p>
                    <Image src={beer.image_url} />
                </p>
            </Grid.Column>
            <Grid.Column>
                <h1 align="center">{beer.name}</h1>
                <br></br>
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
                            <Table.Cell>{country.country_name}</Table.Cell>
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
            <Grid.Column>
                <MyContainer>
                    <p>
                        This item will ship to Spain on {getArrivalDate()}
                    </p>
                    <Header as="h2" color="green">In Stock</Header>
                    <Segment>
                        <h3>Price: {price}€/unit</h3>
                        <DropdownControlled price={price}/>
                    </Segment>
                </MyContainer>
            </Grid.Column>
        </Grid>
    </Segment>
    <Button onClick={history.goBack}>Go Back</Button>
  </div>
);

export default BeerDetail;
