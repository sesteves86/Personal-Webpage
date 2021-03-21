import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  render () {
    return (
      <div className="layout">
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
