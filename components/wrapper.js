import React, {Component} from 'react';
import Header from '../layout/header.js';
import Footer from '../layout/footer.js';
import Menus from '../layout/menu.js';
export default class Home extends Component{
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Menus/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}