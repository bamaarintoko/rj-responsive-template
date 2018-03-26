import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardTitle, Col, Slide, Slider} from "react-materialize";

class PageHome extends Component {
    render() {
        return (
            <Col m={12} s={12}>
                <Slider>
                    <Slide
                        src="http://lorempixel.com/580/250/nature/1"
                        title="This is our big Tagline!">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="http://lorempixel.com/580/250/nature/2"
                        title="Left aligned Caption"
                        placement="left">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="http://lorempixel.com/580/250/nature/3"
                        title="Right aligned Caption"
                        placement="right">
                        Here's our small slogan.
                    </Slide>
                </Slider>
            </Col>
        );
    }
}

// function mapStateToProps(state) {
//     return {};
// }

export default (PageHome);
