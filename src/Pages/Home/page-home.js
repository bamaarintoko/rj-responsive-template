import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardTitle, Col, Footer, Row, Slide, Slider} from "react-materialize";

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
                <Row>
                    <Col m={2} s={12}>
                    </Col>
                    <Col m={8} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <div style={{borderBottom: '1px solid #FF9800'}}>
                            <h4>Berita Utama</h4>
                        </div>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Card className='small'
                                  header={<CardTitle
                                      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kFPI1SSIUYfeuZea2A0o6NabqEN8UNNHLO64GqmsuKgsv4ZD'>Card
                                      Title</CardTitle>}
                                  actions={[<a href='#'>This is a Link</a>]}>
                                I am a very simple card. I am good at containing small bits of information. I am
                                convenient because I require little markup to use effectively.
                            </Card>
                        </Col>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Card className='small'
                                  header={<CardTitle
                                      image='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_DFX8048_2280x819_Q40_wm_mini-1726x819__-1140x541.jpg'>Card
                                      Title</CardTitle>}
                                  actions={[<a href='#'>This is a Link</a>]}>
                                I am a very simple card. I am good at containing small bits of information. I am
                                convenient because I require little markup to use effectively.
                            </Card>
                        </Col>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Card className='small'
                                  header={<CardTitle image='http://www.easypano.com/images/pw/v3/banner.jpg'>Card
                                      Title</CardTitle>}
                                  actions={[<a href='#'>This is a Link</a>]}>
                                I am a very simple card. I am good at containing small bits of information. I am
                                convenient because I require little markup to use effectively.
                            </Card>
                        </Col>
                        <div style={{borderBottom: '1px solid #FF9800'}}>
                            <h4>Kegiatan</h4>
                        </div>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Card className='small'
                                  header={<CardTitle
                                      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kFPI1SSIUYfeuZea2A0o6NabqEN8UNNHLO64GqmsuKgsv4ZD'>Card
                                      Title</CardTitle>}
                                  actions={[<a href='#'>This is a Link</a>]}>
                                I am a very simple card. I am good at containing small bits of information. I am
                                convenient because I require little markup to use effectively.
                            </Card>
                        </Col>
                        <Col m={4} s={12}>
                            <Card className='small'
                                  header={<CardTitle
                                      image='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_DFX8048_2280x819_Q40_wm_mini-1726x819__-1140x541.jpg'>Card
                                      Title</CardTitle>}
                                  actions={[<a href='#'>This is a Link</a>]}>
                                I am a very simple card. I am good at containing small bits of information. I am
                                convenient because I require little markup to use effectively.
                            </Card>
                        </Col>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Card className='small'
                                  header={<CardTitle image='http://www.easypano.com/images/pw/v3/banner.jpg'>Card
                                      Title</CardTitle>}
                                  actions={[<a href='#'>This is a Link</a>]}>
                                I am a very simple card. I am good at containing small bits of information. I am
                                convenient because I require little markup to use effectively.
                            </Card>
                        </Col>
                    </Col>

                    <Col m={2} s={12}>
                    </Col>
                </Row>
                <Col m={12} s={12}>
                    <Footer style={{backgroundColor:'#757575'}} copyrights="&copy 2015 Copyright Text"
                            moreLinks={
                                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                            }
                            links={
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            }
                            className='example'
                    >
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </Footer>
                </Col>
            </Col>
        );
    }
}

// function mapStateToProps(state) {
//     return {};
// }

export default (PageHome);
