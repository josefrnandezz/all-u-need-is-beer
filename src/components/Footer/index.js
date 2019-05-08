import React, { Component } from 'react';
import logo from "../../assets/img/beerlogo.png"
import styled from 'styled-components';
import { 
    Container,
    Divider,
    Grid,
    Header,
    List,
    Segment,
    Button,
} from "semantic-ui-react";

const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 35px;
    heigth: 60px;
`;

class MyFooter extends Component {
    render() {
        return (
            <div className='footer'>
                <Segment inverted style={{ margin: '3em 0em 0em', padding: '3em 0em' }} vertical>
                    <Container textAlign='center'>
                        <Grid columns={1} divided stackable inverted>
                        <Grid.Row>
                            <Grid.Column> 
                            <Header inverted as='h4' content='Follow Us' />
                            <Button icon="twitter" circular href="https://www.twitter.com/jfrnandez_" size="huge"/>
                            <Button icon="instagram" circular href="https://www.instagram.com/josefrnandezz" size="huge" />
                            <Button icon="github" circular href="https://www.github.com/josefrnandezz" size="huge" />
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                        <Divider inverted section />
                        <Image src={logo}/>
                        <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default MyFooter;