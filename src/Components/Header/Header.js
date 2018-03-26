import React, {Component} from 'react';
import {Navbar, NavItem} from "react-materialize";
// import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor:'#424242'}} brand='logo' right>

                <NavItem href='get-started.html'>
                    <span style={{float:"left"}}>Menu</span>
                </NavItem>
                <NavItem href='get-started.html'><span style={{float:"left"}}>Menu</span></NavItem>
                <NavItem href='get-started.html'><span style={{float:"left"}}>Menu</span></NavItem>
                <NavItem href='get-started.html'><span style={{float:"left"}}>Menu</span></NavItem>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default Header;
