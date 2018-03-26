import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "../Components/Header/Header";
import {CardPanel, Col, Row} from "react-materialize";

class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div>
                    <Row>
                        <Col s={12} m={6}>
                            <CardPanel className="teal lighten-4 black-text">
                                <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                            </CardPanel>
                        </Col>
                        <Col s={12} m={6}>
                            For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default (Full);
