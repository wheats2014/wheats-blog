/**
 * 文章添加
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
export default class ArticleAdd extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div>
                        <ol className="breadcrumb">
                            <li><Link to=""><i className="fa fa-dashboard"></i> 后台管理 </Link></li>
                            <li className="active"> 分类添加 </li>
                        </ol>
                    </div>
                </section>
                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label>所属分类:</label>
                                            <select className="form-control">
                                                <option value='' selected="selected">Alabama</option>
                                                <option value=''>Alaska</option>
                                                <option value='' disabled="disabled">California (disabled)</option>
                                                <option value=''>Delaware</option>
                                                <option value=''>Tennessee</option>
                                                <option value=''>Texas</option>
                                                <option value=''>Washington</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>文章标题:</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>文章内容:</label>
                                            <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group text-center">
                                            <button type="button" className="btn btn-success"> 提 交 </button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-default"> 重 置 </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}