import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class NavigationBar extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
            flip: true
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return ( 
            <div className="nav-bar-container">
                <Container>
                    <Row>
                        <Col className="gl-logo-panel" xs="1" md="1" lg="1">
                            <div className="gl-logo"/>
                        </Col>
                        <Col className="gl-nav-bar-panel" xs="8" md="8" lg="8">
                            <Navbar color="faded" light expand="lg">
                                <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav navbar>
                                        <UncontrolledDropdown flip= {this.state.flip}>
                                            <DropdownToggle 
                                                className="nav-text" 
                                                nav= {true}
                                                caret= {true}
                                                color= {'#FFFFFF'}
                                                size= {'50px'}>
                                                Menu 01
                                            </DropdownToggle>
                                            <DropdownMenu >
                                                <DropdownItem >
                                                    Option 1
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Option 2
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Option 3
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Option 4
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}