import React, { Component } from 'react'
import MyConfirm from "../Confirm";
import { Dropdown, Segment } from 'semantic-ui-react'

const options = [
    { key: 0, text: '0', value: 0 },
    { key: 1, text: '1', value: 1 },
    { key: 2, text: '2', value: 2 },
    { key: 3, text: '3', value: 3 },
    { key: 4, text: '4', value: 4 },
    { key: 5, text: '5', value: 5 },
    { key: 6, text: '6', value: 6 },
    { key: 7, text: '7', value: 7 },
    { key: 8, text: '8', value: 8 },
    { key: 9, text: '9', value: 9 },
    { key: 10, text: '10', value: 10 },
];

export default class DropdownControlled extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value: null,
          disabled: false,
      }
  }

  handleChange = (e, { value }) => {
      this.setState({ value });
  }

  render() {
    const { value } = this.state

    return (
    <div>
        <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder='Quantity'
            selection
            value={value}
        />
        <Segment>
            <h2>Total: {(this.props.price * value).toFixed(2)} €</h2>
            <MyConfirm value={value} price={(this.props.price * value).toFixed(2)}/>
        </Segment>
    </div>
    )
  }
}