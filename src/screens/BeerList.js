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
      filter: "",
    };
  }

  componentDidMount() {
    Axios.get("https://api.punkapi.com/v2/beers").then(response => {
      const Beers = response.data.map(beer => ({
        ...beer,
        beerInfo: BeerInfo[beer.id - 1]
      }));

      this.setState({ beers: Beers });
    });
  }

  render() {
    const { history } = this.props;

    const filteredInfo =
      this.state.beers &&
      this.state.beers.filter(beer =>
        beer.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );

    const rows = filteredInfo && _.chunk(filteredInfo, 4);

    return (
      <div>
        <SearchContainer>
        <Input
            icon={{ name: "search", circular: true, link: true }}
            placeholder="Search..."
            onChange={(event, { value }) => this.setState({ filter: value })}
            value={this.state.filter}
          />
        </SearchContainer>
        <Container>
          {rows &&
            rows.map(row => (
              <List horizontal>
                {row.map(element => {
                  return (
                    <List.Item>
                      <List.Content>
                        <BeerItem
                          name={element.name}
                          image={element.image_url}
                          beerInfo={element.beerInfo}
                          onClick={() =>
                            history.push(`/beers/${element.id}`, {
                              beerInfo: element.beerInfo,
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