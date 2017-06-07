/**
 * 文章列表
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
export default class ArticleList extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div>
                        <ol className="breadcrumb">
                            <li><Link to=""><i className="fa fa-dashboard"></i> 后台管理 </Link></li>
                            <li className="active"> 分类列表 </li>
                        </ol>
                    </div>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <table className="table table-bordered">
                                        <tbody><tr>
                                            <th style={{width: '60px'}} className="text-center">序号</th>
                                            <th style={{width: '150px'}} className="text-center">分类名称</th>
                                            <th>分类描述</th>
                                            <th style={{width: '150px'}} className="text-center">添加时间</th>
                                            <th style={{width: '150px'}} className="text-center">操作</th>
                                        </tr>
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-center">angularjs2</td>
                                            <td className="text-left">
                                                react-redux在我的项目中的实际应用
                                            </td>
                                            <td className="text-center">
                                                2017-02-25
                                            </td>
                                            <td className="text-center"><button type="button" className="btn btn-primary btn-xs"><i className="fa fa-edit"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-danger btn-xs"><i className="fa fa-trash "></i></button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="box-footer clearfix">
                                    <ul className="pagination pagination-sm no-margin pull-right">
                                        <li><Link to="#">«</Link></li>
                                        <li><Link to="#">1</Link></li>
                                        <li><Link to="#">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#">»</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}