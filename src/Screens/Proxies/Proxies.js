import React, { Component } from 'react';

export default class Proxies extends Component {
    importFromFile = () => {
        document.getElementById('fileid').click();
    }
    render() {
        return(
            <div className="proxies">
                <div className="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="proxies card text-white">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="heading">
                                                    Monitor Proxies
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="footsite">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn dropdown-toggle btn-toggle"
                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Footsites
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" href="#">Separated link</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>IP</th>
                                                        <th>Port</th>
                                                        <th>Username</th>
                                                        <th>Password</th>
                                                        <th>Speed</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>35.240.19.1</td>
                                                        <td>3128</td>
                                                        <td>brandon</td>
                                                        <td>password</td>
                                                        <td className="text-success">219 ms</td>
                                                        <td>
                                                            <a href="#" className="btn-action"><i
                                                                    className="fa fa-play-circle-o"></i></a>
                                                            <a href="#" className="btn-action"><i className="fa fa-trash-o"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>35.240.19.1</td>
                                                        <td>3128</td>
                                                        <td>brandon</td>
                                                        <td>password</td>
                                                        <td className="text-danger">Bad</td>
                                                        <td>
                                                            <a href="#" className="btn-action"><i
                                                                    className="fa fa-play-circle-o"></i></a>
                                                            <a href="#" className="btn-action"><i className="fa fa-trash-o"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#exampleModalCenter" className="btn btn-add" data-toggle="modal"
                                            data-target="#exampleModalCenter"><i className="fa fa-play-circle-o"></i>
                                            Add Proxies
                                        </a>
                                        <a href="#" className="btn btn-test"><i className="fa fa-play"></i> Test</a>
                                        <a href="#" className="btn btn-all"><i className="fa fa-trash-o"></i> Clear All</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="proxies card text-white">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="heading">
                                                    Task Proxies
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="footsite">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn dropdown-toggle btn-toggle"
                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Footsites
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" href="#">Separated link</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>IP</th>
                                                        <th>Port</th>
                                                        <th>Username</th>
                                                        <th>Password</th>
                                                        <th>Speed</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>35.240.19.1</td>
                                                        <td>3128</td>
                                                        <td>brandon</td>
                                                        <td>password</td>
                                                        <td className="text-success">219 ms</td>
                                                        <td>
                                                            <a href="#" className="btn-action"><i
                                                                    className="fa fa-play-circle-o"></i></a>
                                                            <a href="#" className="btn-action"><i className="fa fa-trash-o"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>35.240.19.1</td>
                                                        <td>3128</td>
                                                        <td>brandon</td>
                                                        <td>password</td>
                                                        <td className="text-danger">Bad</td>
                                                        <td>
                                                            <a href="#" className="btn-action"><i
                                                                    className="fa fa-play-circle-o"></i></a>
                                                            <a href="#" className="btn-action"><i className="fa fa-trash-o"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#exampleModalCenter" className="btn btn-add" data-toggle="modal"
                                            data-target="#exampleModalCenter"><i className="fa fa-play-circle-o"></i>
                                            Add Proxies
                                        </a>
                                        <a href="#" className="btn btn-test"><i className="fa fa-play"></i> Test</a>
                                        <a href="#" className="btn btn-all"><i className="fa fa-trash-o"></i> Clear All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">

                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h5 className="modal-title" id="exampleModalCenterTitle">Add Proxies</h5>
                                <input id='fileid' type='file' hidden />
                                <input id='buttonid' className="btn btn-upload" type='button' value='Import From File' onClick={()=> this.importFromFile()} />

                                <div className="form-group">
                                    <textarea className="form-control textarea1" rows="10"
                                        placeholder="Enter Proxies As IP:PORT:USER:PASS"></textarea>
                                </div>

                                <div className="form-group">
                                    <a href="#" className="btn btn-add1">Add</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}