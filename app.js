/**
 * wheats 博客入口文件
 */
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexLink, browserHistory} from 'react-router';
import Home from './components/home.js';
import {routes} from './routes/index.js';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
    </Router>,
    document.getElementById('app')
);