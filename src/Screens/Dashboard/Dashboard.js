import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskCount: 1, 
            dateTime: '',
        }
    }

    increaseValue = () => {
        var value = parseInt(document.getElementById('number').value, 10);
        value = value ? value : 0;
        value++;
        this.setState({
            taskCount: value,
        });
    }

    decreaseValue = () => {
        var value = parseInt(document.getElementById('number').value, 10);
        value = value ? value : 0;
        value = value < 1 ? 1 : value;
        value--;

        this.setState({
            taskCount: value,
        });

    }

    handleTaskCountChange(event) {
        this.setState({
            taskCount: event.target.value,
        });
    }

    handleTaskDateChange(event) {
        this.setState({
            dateTime: event.target.value,
        });
        console.log("time", this.state.dateTime);
    }

    createTask() {
        console.log("create task");
    }
    
    render() {
        return(
            <div className="dashboard">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="proxies proxies1 card text-white">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="heading">
                                                        Task
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="footsite footsite2">
                                                        <a href="#"><i className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="task-btns">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <a className="btn " href="#exampleModalCenter1"  data-toggle="modal" data-target="#exampleModalCenter1">Add Task</a>
                                                        <a href="#" className="btn">Edit Task</a>
                                                        <a href="#" className="btn ">Import</a>
                                                        <a href="#" className="btn ">Export</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="proxies proxies1 card text-white">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="heading">
                                                        Mass Edit
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="footsite footsite2">
                                                        <a href="#"><i className="fa fa-pencil"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="edit-form">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Link Change</label>
                                                            <input type="text" name="link" className="form-control" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Password</label>
                                                            <input type="text" name="link" className="form-control" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Delay</label>
                                                            <input type="text" name="link" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="proxies proxies1 card text-white">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="heading">
                                                        Captcha
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="footsite footsite2">
                                                        <a href="#"><i className="fa fa-th-large"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="window-btns">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <a href="#exampleModalCenter2" className="btn" data-toggle="modal" data-target="#exampleModalCenter2">Open Window</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="proxies proxies1 card text-white">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="heading">
                                                        Version
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="footsite footsite2">
                                                        <a href="#"><i className="fa fa-layer-group"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">

                                            <div className="version">
                                                <div className="row">
                                                    <div className="col-12">

                                                        <label>1.0.0</label>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="proxies proxies2 card text-white">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="heading">
                                                        <i style={{color: "#a7a9b7", fontSize: "14px"}} className="fas fa-list"></i>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="footsite footsite3">
                                                        <div className="form-group has-search">
                                                            <span className="fa fa-search form-control-feedback"></span>
                                                            <input type="text" className="form-control" placeholder="Search" />
                                                        </div>
                                                        <a className="collapse-card" data-toggle="collapse" href="#test-block" aria-expanded="true" aria-controls="test-block"><i className="fa fa-chevron-up"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="steps collapse show" id="test-block">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="step-number">
                                                            3 
                                                        </div>
                                                        <div className="step-title">
                                                            Total
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="step-number">
                                                            2
                                                        </div>
                                                        <div className="step-title">
                                                            Carted
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="step-number">
                                                            1 
                                                        </div>
                                                        <div className="step-title">
                                                            Copped
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th style={{width: "2%"}}>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                    <label className="custom-control-label" htmlFor="customCheck1"></label>
                                                                </div>
                                                            </th>
                                                            <th style={{width: "15%", textAlign: "left"}}>Retailer</th>
                                                            <th>Product</th>
                                                            <th>Size</th>
                                                            <th>Profile</th>
                                                            <th>Status</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                                    <label className="custom-control-label" htmlFor="customCheck2"></label>
                                                                </div>
                                                            </td>
                                                            <td style={{width: "15%", textAlign: "left"}}>
                                                                <img src="Assets/images/supreme-logo.png" alt="" />
                                                                <div className="company-name">Supreme <br/>
                                                                    <span className="location">US Region</span>
                                                                </div>
                                                            </td>
                                                            <td>+Box,+Logo</td>
                                                            <td>S, M, L</td>
                                                            <td>Debit</td>
                                                            <td>Idle</td>
                                                            <td>
                                                                <a href="#" className="btn-action"><i className="fa fa-play-circle-o"></i></a>
                                                                <a href="#" className="btn-action"><i className="fa fa-pencil"></i></a>
                                                                <a href="#" className="btn-action"><i className="fa fa-refresh"></i></a>
                                                                <a href="#" className="btn-action"><i className="fa fa-trash-o"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                                    <label className="custom-control-label" htmlFor="customCheck3"></label>
                                                                </div>
                                                            </td>
                                                            <td style={{width: "15%", textAlign: "left"}}>
                                                                <img src="Assets/images/shopify-logo.png" alt=""/>
                                                                <div className="company-name">Shopify <br />
                                                                    <span className="location">Kith</span>
                                                                </div>
                                                            </td>
                                                            <td>THE 10: NIKE AIR PRESTO "OFF WHITE"</td>
                                                            <td>Random</td>
                                                            <td>Debit #2</td>
                                                            <td className="text-success">Check Email</td>
                                                            <td>
                                                                <a href="#" className="btn-action"><i className="fa fa-play-circle-o"></i></a>
                                                                <a href="#" className="btn-action"><i className="fa fa-pencil"></i></a>
                                                                <a href="#" className="btn-action"><i className="fa fa-refresh"></i></a>
                                                                <a href="#" className="btn-action"><i className="fa fa-trash-o"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                                    <label className="custom-control-label" htmlFor="customCheck4"></label>
                                                                </div>
                                                            </td>
                                                            <td style={{width: "15%", textAlign: "left"}}>
                                                                <img src="Assets/images/footsites-logo.png" alt=""/>
                                                                <div className="company-name">Footsites<br />
                                                                    <span className="location">Footlocker US</span>
                                                                </div>
                                                            </td>
                                                            <td>+Box,+Logo</td>
                                                            <td>Large</td>
                                                            <td>Credit</td>
                                                            <td className="text-warning">Processing...</td>
                                                            <td>
                                                                <a href="#" className="btn-action"><i className="fa fa-play-circle-o"></i></a>
                                                                <a href="#" className="btn-action"><i className="fa fa-pencil"></i></a>
                                                                <a href="#" className="btn-action"><i className="fa fa-refresh"></i></a>
                                                                <a href="#" className="btn-action"><i className="fa fa-trash-o"></i></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="btn btn-add"><i className="fa fa-play"></i> Start Task</a>
                                            <a href="#" className="btn btn-all"><i className="fa fa-stop"></i> Stop Task</a>
                                            <a href="#" className="btn btn-test"><i className="fa fa-trash-o"></i> Clear Task</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Create Taks Modal */}
                <div className="modal modal2 fade" id="exampleModalCenter1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">

                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h5 className="modal-title" id="exampleModalCenterTitle">Create Task</h5>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Store</label>
                                                <select className="form-control form-control-sm">
                                                    <option>Select Store</option>
                                                    <option>Supreme US</option>
                                                    <option>Supreme US</option>
                                                    <option>Supreme US</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Size</label>
                                                <select className="form-control form-control-sm">
                                                    <option>Select Size</option>
                                                    <option>small</option>
                                                    <option>Large</option>
                                                    <option>Extra Large</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Product</label>
                                                <div className="form-group has-search">
                                                    <span className="fa fa-search form-control-feedback"></span>
                                                    <input type="text" className="form-control form-control-sm" placeholder="Search" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Profile</label>
                                                <select className="form-control form-control-sm">
                                                    <option>Select Profile</option>
                                                    <option>Supreme US</option>
                                                    <option>Supreme US</option>
                                                    <option>Supreme US</option>
                                                    <option>Supreme US</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Schedule</label>
                                                <div className="input-group date has-search2">
                                                    <input type='text' className="form-control form-control-sm" placeholder="Select Time" id='datetimepicker1' onChange={this.handleTaskDateChange}/>
                                                    <span className="fa fa-calendar form-control-feedback2"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Checkout Delay</label>
                                                <div className="form-group date">
                                                    <input type='text' className="form-control form-control-sm" placeholder="Enter Number" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Color</label>
                                                <div className="form-group date">
                                                    <input type='text' className="form-control form-control-sm" placeholder="Enter Color" />                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="bottom-btns">
                                                <div className="btn-number">
                                                    <div className="value-button" id="decrease" onClick={()=>this.decreaseValue()}><i className="fa fa-minus"></i></div>
                                                    <input type="number" id="number" value={this.state.taskCount} onChange={this.handleTaskCountChange}/>
                                                    <div className="value-button" id="increase" onClick={()=>this.increaseValue()}><i className="fa fa-plus"></i></div>
                                                </div>
                                                <button type="submit" className="btn btn-create" onClick={()=>this.createTask()}>Create</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Captcha window Modal */}
                <div className="modal fade modal2 captcha-modal" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Captcha (1/10)</h5>
                                <i style={{color: "#fff", right: "38px", top: "20px", float: "right", position: "absolute", fontSize: "14px"}} className="fa fa-minus-square-o"></i>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>WAITING FOR CAPTCHA...</p>

                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <div className="form-group proxy">
                                            <input type="text" className="form-control form-control-sm" placeholder="Enter Proxy" />
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-login" >Login</button>
                                <button type="button" className="btn btn-clear">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}