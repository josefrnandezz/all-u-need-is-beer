import React, { Component } from "react";
import styled from "styled-components";
import BeerItem from "../components/BeerItem";
import Axios from "axios";
import _ from "lodash";
import { List, Search } from "semantic-ui-react";

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
      data: null,
      countries: null
    };
  }

  componentDidMount() {
    Axios.get("https://api.punkapi.com/v2/beers").then(response => {
      const Data = response.data;
      this.setState({ data: Data });
    });

    Axios.get("https://restcountries.eu/rest/v2/region/europe").then(
      response => {
        const Countries = response.data;
        this.setState({ countries: Countries });
      }
    );
  }

  getCountry() {
    return Math.floor(Math.random() * 25);
  }

  render() {
    const { history } = this.props;
    const rows =
      this.state.countries && this.state.data && _.chunk(this.state.data, 4);

    return (
      <div>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <Container>
          {rows &&
            rows.map(row => (
              <List horizontal>
                {row.map(element => {
                  const country = this.state.countries[this.getCountry()];
                  const price = Math.floor(Math.random() * (1000 - 100) + 500) / 100;
                  return (
                    <List.Item>
                      <List.Content>
                        <BeerItem
                          name={element.name}
                          image={element.image_url}
                          rating={Math.floor(Math.random() * 5 + 2)}
                          price={price}
                          country={country}
                          onClick={() =>
                            history.push(`/beers/${element.id}`, {
                              country,
                              beer: element,
                              price
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