import React, { Component } from 'react';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem, } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import './NavbarMain.css';
import SearchBar from './SearchBar';

 class NavbarMain extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState(prevState => (
      { isOpen: !(prevState.isOpen) }
    ));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="NavbarMain">
        <Navbar className="navbarmain" expand="md">
          <NavbarBrand className="mr-1 pt-0">
            <Link to="/"><img className="logo-homepage" src="/medias/log.png" alt="logo" /></Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem className="item-nav ml-5">
                <Link className="link-navbar" to="/all">Tous les films</Link>
              </NavItem>
              <NavItem className="item-nav ml-5">
                <Link className="link-navbar" to="/add">Ajouter un film</Link>
              </NavItem>
              <NavItem className="ml-5">
                <SearchBar />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;