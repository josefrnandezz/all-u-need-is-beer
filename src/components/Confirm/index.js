import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class MyConfirm extends Component {
  state = { 
    open: false,
    content: "BUY NOW",
    active: false,
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  handleButtonClick = () => {
      if (!this.props.value) {
          alert("You need 1 or more items");
      } else {
          this.open();
      }
  }

  handleConfirmClick = () => {
        this.setState({ content: "BOUGHT"});
        this.setState({ active: true });
        this.close();
  }

  render() {
    return (
      <div>
        <Button disabled={this.state.active} positive onClick={this.handleButtonClick}>
            {this.state.content}
        </Button>
        <Confirm 
            open={this.state.open}
            onCancel={this.close}
            onConfirm={this.handleConfirmClick}
        />
      </div>
    )
  }
}

export default MyConfirm;