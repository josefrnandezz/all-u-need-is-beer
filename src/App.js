import React, { Component } from "react";
import BeerItem from "./components/BeerItem";
import Axios from "axios";
import { List } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      countries: null,
    };
  }

  componentDidMount() {
    Axios
      .get("https://api.punkapi.com/v2/beers")
      .then(response => {
        const Data = response.data;
        this.setState({ data: Data });
      })
    
    Axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      const Countries = response.data;
      this.setState({ countries: Countries });
    })
  }

  getRandom() {
    return Math.floor((Math.random() * 249) + 1);
  }

  render() {
    return (
      <List horizontal>
        {this.state.countries && this.state.data && this.state.data.map(element => (
          <List.Item>
            <List.Content>
                <BeerItem 
                  name={element.name} 
                  rating={element.abv}
                  image={element.image_url}
                  country={this.state.countries[this.getRandom()].name}
                  onClick={(() => console.log(element.description))}
                />
            </List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
}

export default App;
