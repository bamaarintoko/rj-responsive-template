import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, CardPanel, CardTitle, Col, Icon, Navbar, NavItem, Row} from "react-materialize";
import Header from "./Components/Header/Header";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Row>
                    <Col s={12} m={5}>
                        <CardPanel className="teal lighten-4 black-text">
                            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                        </CardPanel>
                    </Col>
                    <Col s={12} m={7}>
                        For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
