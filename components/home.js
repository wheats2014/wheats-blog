/**
 * 首页
 */
import React, {Component} from 'react';
import Wrapper from './wrapper.js';
import ArticleList from './articleList.js';
export default class Home extends Component{
    render() {
        return (
            <Wrapper>
                <ArticleList/>
            </Wrapper>
        )
    }
}