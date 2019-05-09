import React, { Component } from "react";
import logo from "../../beerlogo.png";
import {
  Container,
  Image,
  Menu,
  Visibility,
} from "semantic-ui-react";

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '1m',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  backgroundColor: '#fff',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

class MyHeader extends Component {
  constructor() {
    super();
    this.state = {
      menuFixed: false,
    }
  }

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed } = this.state

    return (
      <div className="header">
        <style>{`
            html, body {
            background: #fff;
          }
        `}
        </style>

        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image src={logo} size="mini"/>
              </Menu.Item>
              <Menu.Item header as="h2">{this.props.name}
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}

export default MyHeader;