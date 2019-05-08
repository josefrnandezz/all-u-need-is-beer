import React, { Component } from "react";
import styled from "styled-components";
import BeerItem from "../components/BeerItem";
import Axios from "axios";
import _ from "lodash";
import { List, Input } from "semantic-ui-react";
import BeerInfo from "../BeerInfo.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  margin-left: 75px;
  margin-bottom: 30px;
`;

class BeerList extends Component {
  constructor() {
    super();
    this.state = {
      beers: null,
      beerInfo: null
    };
  }

  componentDidMount() {
    Axios.get("https://api.punkapi.com/v2/beers").then(response => {
      const Beers = response.data;
      this.setState({ beers: Beers });
    });

    this.setState({ beerInfo: BeerInfo });
  }

  render() {
    const { history } = this.props;
    const rows =
      this.state.beerInfo && this.state.beers && _.chunk(this.state.beers, 4);

    return (
      <div>
        <SearchContainer>
          <Input 
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='Search...'
          />
        </SearchContainer>
        <Container>
          {rows &&
            rows.map(row => (
              <List horizontal>
                {row.map(element => {
                  const beerInfo = this.state.beerInfo[element.id];
                  return (
                    <List.Item>
                      <List.Content>
                        <BeerItem
                          name={element.name}
                          image={element.image_url}
                          beerInfo={beerInfo}
                          onClick={() =>
                            history.push(`/beers/${element.id}`, {
                              beerInfo,
                              beer: element,
                            })
                          }
                        />
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            ))}
        </Container>
      </div>
    );
  }
}

export default BeerList;