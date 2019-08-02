import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="/" className="logoLink">
                                <img src="Assets/images/logo.png" alt="" />
                            </Link>
                        </div>
        
                        <div className="col-md-6">
                            <div className="header-tabs">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <Link className={this.props.location.pathname == '/' ? 'nav-link active' : 'nav-link'} id="home-tab" to="/" role="tab"
                                            aria-controls="home" aria-selected="false">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={this.props.location.pathname == '/success' ? 'nav-link active' : 'nav-link'} id="profile-tab" to="/success" role="tab"
                                            aria-controls="profile" aria-selected="false">Success</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className={this.props.location.pathname == '/proxies' ? 'nav-link active' : 'nav-link'} id="contact-tab" to="/proxies"
                                            role="tab" aria-controls="contact" aria-selected="true">Proxies</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={this.props.location.pathname == '/billing' ? 'nav-link active' : 'nav-link'} id="billing-tab" to="/billing" role="tab"
                                            aria-controls="billing" aria-selected="false">Billing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={this.props.location.pathname == '/settings' ? 'nav-link active' : 'nav-link'} id="aettings-tab" to="/settings" role="tab"
                                            aria-controls="settings" aria-selected="false">Settings</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="right-side">
                                <span className="welcom">
                                    Welcome To Version 1.00
                                </span>
                                <i className="fa fa-minus-square-o" id="minimum"></i>
                                <i className="fa fa-times" id="close"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}