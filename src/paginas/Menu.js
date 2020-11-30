import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

class Menu extends Component{

    render(){
        return (
            <div className="App">
                <Navbar bg="info" expand="lg">
                    <Navbar.Brand href="/">e-commerce</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                {this.props.data.map(opcion=><Nav.Link as={Link} to={opcion.path}><div>{opcion.name}</div></Nav.Link>)}
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
            
        )
    }
}

export default Menu;