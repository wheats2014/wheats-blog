/**
 * 左边菜单
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
export default class ManagerInfo extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="static/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left info">
                            <p>xiaomai</p>
                            <Link to=""><i className="fa fa-circle text-success"></i> 在线</Link>
                        </div>
                    </div>

                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">菜单管理</li>
                        <li className="treeview active">
                            <Link to="">
                                <i className="fa fa-list"></i> <span>分类管理</span>
                                <span className="pull-right-container"><i className="fa fa-angle-up pull-right"></i></span>
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to="/ac"><i className="fa fa-circle-o text-red"></i>添加分类</Link></li>
                                <li><Link to="/"><i className="fa fa-circle-o"></i>分类列表</Link></li>
                            </ul>
                        </li>
                        <li className="treeview active">
                            <Link to="">
                                <i className="fa fa-file-text"></i>
                                <span>文章管理</span>
                                <span className="pull-right-container"><i className="fa fa-angle-down pull-right"></i></span>
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to=""><i className="fa fa-circle-o"></i>添加文章</Link></li>
                                <li><Link to="/"><i className="fa fa-circle-o"></i>文章列表</Link></li>
                            </ul>
                        </li>
                        <li className="treeview active">
                            <Link to="">
                                <i className="fa fa-user"></i>
                                <span>用户管理</span>
                                <span className="pull-right-container"><i className="fa fa-angle-down pull-right"></i></span>
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to=""><i className="fa fa-circle-o"></i>添加管理员</Link></li>
                                <li><Link to=""><i className="fa fa-circle-o"></i>管理员列表</Link></li>
                            </ul>
                        </li>
                        <li className="treeview active">
                            <Link to="">
                                <i className="fa fa-gear"></i>
                                <span>系统设置</span>
                                <span className="pull-right-container"><i className="fa fa-angle-down pull-right"></i></span>
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to=""><i className="fa fa-circle-o"></i>修改密码</Link></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}