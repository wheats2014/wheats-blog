/**
 * 左边菜单列表
 */
import React, {Component} from 'react';
export default class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="static/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                            </div>
                            <div className="pull-left info">
                                <p>xiaomai</p>
                                <a href="#"><i className="fa fa-circle text-success"></i> 在线</a>
                            </div>
                        </div>

                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">菜单管理</li>
                            <li className="treeview active">
                                <a href="#">
                                    <i className="fa fa-list"></i> <span>分类管理</span>
                                    <span className="pull-right-container"><i className="fa fa-angle-up pull-right"></i></span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="../../index.html"><i className="fa fa-circle-o text-red"></i>添加分类</a></li>
                                    <li><a href="../../index.html"><i className="fa fa-circle-o"></i>分类列表</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-file-text"></i>
                                    <span>文章管理</span>
                                    <span className="pull-right-container"><i className="fa fa-angle-down pull-right"></i></span>
                                    <ul className="treeview-menu">
                                        <li><a href="../../index.html"><i className="fa fa-circle-o"></i>添加文章</a></li>
                                        <li><a href="../../index.html"><i className="fa fa-circle-o"></i>文章列表</a></li>
                                    </ul>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-user"></i>
                                    <span>用户管理</span>
                                    <span className="pull-right-container"><i className="fa fa-angle-down pull-right"></i></span>
                                    <ul className="treeview-menu">
                                        <li><a href="../../index.html"><i className="fa fa-circle-o"></i>添加管理员</a></li>
                                        <li><a href="../../index.html"><i className="fa fa-circle-o"></i>管理员列表</a></li>
                                    </ul>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-gear"></i>
                                    <span>系统设置</span>
                                    <span className="pull-right-container"><i className="fa fa-angle-down pull-right"></i></span>
                                    <ul className="treeview-menu">
                                        <li><a href="../../index.html"><i className="fa fa-circle-o"></i>修改密码</a></li>
                                    </ul>
                                </a>
                            </li>
                        </ul>
                    </section>
                </aside>

                <div className="content-wrapper">
                    <section className="content-header">
                        <div>
                            <ol className="breadcrumb">
                                <li><a href="#"><i className="fa fa-dashboard"></i> 后台管理 </a></li>
                                <li className="active"> 文章列表 </li>
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
                                                <th style={{width: 60 + 'px'}} className="text-center">序号</th>
                                                <th style={{width: 150 + 'px'}} className="text-center">所属分类</th>
                                                <th>文章标题</th>
                                                <th style={{width: 150 + 'px'}} className="text-center">发布时间</th>
                                                <th style={{width: 150 + 'px'}} className="text-center">发布人</th>
                                                <th style={{width: 150 + 'px'}} className="text-center">操作</th>
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
                                                <td className="text-center">wheats</td>
                                                <td className="text-center"><button type="button" className="btn btn-primary btn-xs"><i className="fa fa-edit"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-danger btn-xs"><i className="fa fa-trash "></i></button>&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-success btn-xs"><i className="fa fa-eye"></i></button></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="box-footer clearfix">
                                        <ul className="pagination pagination-sm no-margin pull-right">
                                            <li><a href="#">«</a></li>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">»</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}