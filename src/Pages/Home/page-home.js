import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardTitle, Col, Footer, Row, Slide, Slider} from "react-materialize";
import Foot from "../../Components/Footer/Foot";
import {Wrapper} from "../../Components/Content/Content";

class PageHome extends Component {
    render() {
        return (
            <Col m={12} s={12}>
                <Slider>
                    <Slide
                        src="#"
                        title="This is our big Tagline!">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="#"
                        title="Left aligned Caption"
                        placement="left">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="#"
                        title="Right aligned Caption"
                        placement="right">
                        Here's our small slogan.
                    </Slide>
                </Slider>
                <Wrapper>
                    <Row>
                        <Col m={8} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <div style={{borderBottom: '1px solid #FF9800'}}>
                                <h4>Pengumuman</h4>
                            </div>
                            <div style={{paddingBottom: 20}}>
                                <h5>Ut in consequat nunc, sit amet finibus ex. In hac.</h5>
                                <p>Morbi et tellus consequat, tristique lorem a, accumsan quam. Praesent ac ante tellus.
                                    Phasellus vel condimentum urna. Vivamus ut nibh dui. Phasellus massa eros, mollis
                                    sit amet quam lacinia, sodales vulputate turpis. Aenean elementum magna et augue
                                    porta, quis imperdiet ligula finibus. Vestibulum velit arcu, molestie a ligula at,
                                    fermentum volutpat mi. Integer hendrerit semper lacus, id egestas nulla hendrerit
                                    eget.</p>
                            </div>
                            <div>
                                <h5>Integer nec ex quis libero consequat porta eget id justo.</h5>
                                <p>Mauris porta nibh est, vel molestie enim porttitor eu. Nulla elementum, elit sed
                                    porttitor sodales, risus urna viverra odio, ultricies dignissim mi nisl non ipsum.
                                    Donec eget rutrum turpis. Nunc ornare nisl neque, quis dignissim arcu porttitor
                                    vitae. Vivamus faucibus et orci quis rutrum. Nulla facilisi. Aenean non lacus
                                    sapien.</p>
                            </div>
                        </Col>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <div style={{borderBottom: '1px solid #FF9800'}}>
                                <h4>Agenda</h4>
                            </div>
                            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                                  actions={[<a href='#'>This is a link</a>]}>
                                I am a very simple card.
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col m={12} s={12}>
                            <div style={{borderBottom: '1px solid #FF9800'}}>
                                <h4>Berita Utama</h4>
                            </div>
                        </Col>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                                  actions={[<a href='#'>This is a link</a>]}>
                                I am a very simple card.
                            </Card>
                        </Col>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                                  actions={[<a href='#'>This is a link</a>]}>
                                I am a very simple card.
                            </Card>
                        </Col>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                                  actions={[<a href='#'>This is a link</a>]}>
                                I am a very simple card.
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col m={12} s={12}>
                            <div style={{borderBottom: '1px solid #FF9800'}}>
                                <h4>Kegiatan</h4>
                            </div>
                        </Col>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                                  actions={[<a href='#'>This is a link</a>]}>
                                I am a very simple card.
                            </Card>
                        </Col>
                        <Col m={4} s={12}>
                            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                                  actions={[<a href='#'>This is a link</a>]}>
                                I am a very simple card.
                            </Card>
                        </Col>
                        <Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                                  actions={[<a href='#'>This is a link</a>]}>
                                I am a very simple card.
                            </Card>
                        </Col>
                    </Row>
                </Wrapper>
                {/*<Row>*/}
                {/*<Col m={2} s={12}>*/}
                {/**/}
                {/*</Col>*/}
                {/*<Col m={8} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>*/}
                {/*<div style={{borderBottom: '1px solid #FF9800'}}>*/}
                {/*<h4>Berita Utama</h4>*/}
                {/*</div>*/}
                {/*<Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>*/}
                {/*<Card className='small'*/}
                {/*header={<CardTitle*/}
                {/*image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kFPI1SSIUYfeuZea2A0o6NabqEN8UNNHLO64GqmsuKgsv4ZD'>Card*/}
                {/*Title</CardTitle>}*/}
                {/*actions={[<a href='#'>This is a Link</a>]}>*/}
                {/*I am a very simple card. I am good at containing small bits of information. I am*/}
                {/*convenient because I require little markup to use effectively.*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*<Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>*/}
                {/*<Card className='small'*/}
                {/*header={<CardTitle*/}
                {/*image='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_DFX8048_2280x819_Q40_wm_mini-1726x819__-1140x541.jpg'>Card*/}
                {/*Title</CardTitle>}*/}
                {/*actions={[<a href='#'>This is a Link</a>]}>*/}
                {/*I am a very simple card. I am good at containing small bits of information. I am*/}
                {/*convenient because I require little markup to use effectively.*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*<Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>*/}
                {/*<Card className='small'*/}
                {/*header={<CardTitle image='http://www.easypano.com/images/pw/v3/banner.jpg'>Card*/}
                {/*Title</CardTitle>}*/}
                {/*actions={[<a href='#'>This is a Link</a>]}>*/}
                {/*I am a very simple card. I am good at containing small bits of information. I am*/}
                {/*convenient because I require little markup to use effectively.*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*<div style={{borderBottom: '1px solid #FF9800'}}>*/}
                {/*<h4>Kegiatan</h4>*/}
                {/*</div>*/}
                {/*<Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>*/}
                {/*<Card className='small'*/}
                {/*header={<CardTitle*/}
                {/*image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kFPI1SSIUYfeuZea2A0o6NabqEN8UNNHLO64GqmsuKgsv4ZD'>Card*/}
                {/*Title</CardTitle>}*/}
                {/*actions={[<a href='#'>This is a Link</a>]}>*/}
                {/*I am a very simple card. I am good at containing small bits of information. I am*/}
                {/*convenient because I require little markup to use effectively.*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*<Col m={4} s={12}>*/}
                {/*<Card className='small'*/}
                {/*header={<CardTitle*/}
                {/*image='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_DFX8048_2280x819_Q40_wm_mini-1726x819__-1140x541.jpg'>Card*/}
                {/*Title</CardTitle>}*/}
                {/*actions={[<a href='#'>This is a Link</a>]}>*/}
                {/*I am a very simple card. I am good at containing small bits of information. I am*/}
                {/*convenient because I require little markup to use effectively.*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*<Col m={4} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>*/}
                {/*<Card className='small'*/}
                {/*header={<CardTitle image='http://www.easypano.com/images/pw/v3/banner.jpg'>Card*/}
                {/*Title</CardTitle>}*/}
                {/*actions={[<a href='#'>This is a Link</a>]}>*/}
                {/*I am a very simple card. I am good at containing small bits of information. I am*/}
                {/*convenient because I require little markup to use effectively.*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*</Col>*/}

                {/*<Col m={2} s={12}>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                <Foot/>
            </Col>
        );
    }
}

// function mapStateToProps(state) {
//     return {};
// }

export default (PageHome);
