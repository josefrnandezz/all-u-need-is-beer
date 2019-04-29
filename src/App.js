import React, { Component } from "react";
import BeerItem from "./components/BeerItem";
import Axios from "axios";
import { List } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    Axios
      .get("https://api.punkapi.com/v2/beers")
      .then(response => {
        const Data = response.data;
        this.setState({ data: Data });
      })
  }

  render() {
    return (
        <List horizontal>
          {this.state.data && this.state.data.map(element => (
            <List.Item>
              <BeerItem 
                name={element.name} 
                rating={element.abv}
                image={element.image_url}
                onClick={(() => console.log(element.description))}
              />
            </List.Item>
          ))}
        </List>
    );
  }
}

export default App;
