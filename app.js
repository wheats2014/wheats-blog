/**
 * 入口文件
 */
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexLink, browserHistory} from 'react-router';
import Home from './components/home.js';
import Ac from './components/ac.js';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <IndexLink component={Home}></IndexLink>
        <Route path="/ac" component={Ac}></Route>

    </Router>,
    document.body
);