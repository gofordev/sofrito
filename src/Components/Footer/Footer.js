import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <p><i className="fa fa-refresh"></i> Check For Updates <a href="#"><i className="fab fa-twitter"></i></a> &nbsp; <a href="#"><i className="fab fa-discord"></i></a> </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
