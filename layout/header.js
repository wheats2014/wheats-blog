/**
 * 头部
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
            <Link href="index2.html" className="logo">
                <span className="logo-mini"><b>A</b>LT</span>
                <span className="logo-lg"><b>wheats.me</b></span>
            </Link>
            <nav className="navbar navbar-static-top">
            </nav>
        </header>
        )
    }
}
