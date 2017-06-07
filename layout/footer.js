/**
 * 底部
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
export default class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <strong>Copyright &copy; 2017-2018 <Link href="http://www.wheats.me">wheats.me</Link></strong> All rights
            </footer>
        )
    }
}
