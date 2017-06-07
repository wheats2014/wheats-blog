/**
 * 首页
 */
import React, {Component} from 'react';
import Wrapper from './wrapper.js';
import ArticleAdd from './articleAdd.js';
export default class Home extends Component{
    render() {
        return (
            <Wrapper>
                <ArticleAdd/>
            </Wrapper>
        )
    }
}