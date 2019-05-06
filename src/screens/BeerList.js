import React, { Component } from "react";
import BeerItem from "../components/BeerItem";
import Axios from "axios";
import { List } from "semantic-ui-react";

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
    return (
      <List horizontal>
        {this.state.countries &&
          this.state.data &&
          this.state.data.map(element => {
            const country = this.state.countries[this.getCountry()];
            return (
              <List.Item>
                <List.Content>
                  <BeerItem
                    name={element.name}
                    image={element.image_url}
                    rating={Math.floor(Math.random() * 5 + 2)}
                    price={Math.floor(Math.random() * (1000 - 100) + 500) / 100}
                    country={country}
                    onClick={() =>
                      history.push(`/beers/${element.id}`, {
                        country,
                        beer: element
                      })
                    }
                  />
                </List.Content>
              </List.Item>
            );
          })}
      </List>
    );
  }
}

export default BeerList;
