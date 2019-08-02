import React, { Component } from 'react';
import isElectron from 'is-electron';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskCount: 1, 
            dateTime: '',
            product: '',
            delay: 0,
            color: '',
            store: 'null',
            size: 'null',
            profile: 'null',
            profiles: [],
            tasks: null,
            indexArr: [],
            isEdit: false,
            editIndex: 0
        }
    }

    componentDidMount() {
        if (isElectron())
        {
            window.storage.get('tasks', function(error, data) {
                if (error) throw error;
                if(JSON.parse(data.tasks) != null){
                    localStorage.setItem("tasks", data.tasks)
                }
            });
            window.storage.get('profiles', function(error, data) {
                if (error) throw error;
                if(JSON.parse(data.profiles) != null){
                    localStorage.setItem("profiles", data.profiles)
                }
            });
        }
          
        window.$(function () {
            window.$('#datetimepicker1').datetimepicker();
        });
        var data = []
        if(localStorage.getItem("profiles")){
            data = JSON.parse(localStorage.getItem("profiles"))
            if(data){
                this.setState({
                    profiles: data
                })
            }
        }
        if(localStorage.getItem("tasks")){
            data = JSON.parse(localStorage.getItem("tasks"))
            if(data){
                this.setState({
                    tasks: data
                })
            }
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

    handleTaskCountChange = (event) => {
        this.setState({
            taskCount: event.target.value,
        });
    }

    handleTaskDateChange = (event) => {
        this.setState({
            dateTime: event.target.value,
        });
    }

    handleChangeProduct = (event) => {
        this.setState({
            product: event.target.value
        })
    }

    handleChangeProfile = (event) => {
        this.setState({
            profile: event.target.value
        })
    }

    handleChangeStore = (event) => {
        this.setState({
            store: event.target.value
        })
    }

    handleChangeSize = (event) => {
        this.setState({
            size: event.target.value
        })
    }

    handleChangeDelay = (event) => {
        this.setState({
            delay: (event.target.validity.valid) ? event.target.value : this.state.delay
        })
    }

    handleChangeColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    handleChangeIsChecked = (index) => {
        console.log(index)
    }

    createTask() {
        let obj = {};
        obj["store"] = this.state.store;
        obj["size"] = this.state.size;
        obj["product"] = this.state.product;
        obj["profile"] = this.state.profile;
        obj["schedule_time"] = document.getElementById("datetimepicker1").value;
        obj["delay"] = this.state.delay;
        obj["color"] = this.state.color;
        obj["status"] = "Idle"
        const taskCount = parseInt(this.state.taskCount);

        if(!this.state.product){
            alert("Please fill in all the fields.")
            return
        }
        else {
            if(this.state.isEdit)
            {
                console.log("update task", obj);
                this.editTask("tasks", obj);
            }
            else
            {
                for (var i=0;i<taskCount;i++)
                {
                    this.addTask("tasks", obj);
                }
            }
            console.log("create task", obj);
            var data = []
            if(localStorage.getItem("tasks")){
                data = JSON.parse(localStorage.getItem("tasks"))
                if(data){
                    this.setState({
                        tasks: data
                    })
                }
            }
        }
    }

    addTask = (t, obj) => {
        let data = []
        if(localStorage.getItem(t)){
            data = JSON.parse(localStorage.getItem(t))
            if(data){
                obj["id"] = data.length+1
                data.push(obj)
                localStorage.setItem(t, JSON.stringify(data))
            }
        }else{
            obj["id"] = 1
            data.push(obj)
            localStorage.setItem(t, JSON.stringify(data))
        }
        return data
    }

    editTask = (t, obj) => {
        let data = []
        var index = this.state.editIndex;
        if(localStorage.getItem(t)){
            data = JSON.parse(localStorage.getItem(t))
            if(data){
                data[index] = obj;
                localStorage.setItem(t, JSON.stringify(data))
            }
        }
        return data 
    }

    deleteTask = (index) => {
        let data = []
        if(localStorage.getItem("tasks")){
            data = JSON.parse(localStorage.getItem("tasks"))
            if(data){
                data.splice(index, 1)
                localStorage.setItem("tasks", JSON.stringify(data))
                this.setState({
                    tasks: data
                })
            }
        }
    }

    deleteAllTasks = () => {
        localStorage.setItem("tasks", JSON.stringify([]))
        this.setState({
            tasks: null
        })
    }
    
    runTask = (index) => {
        let data = []
        if(localStorage.getItem("tasks")){
            data = JSON.parse(localStorage.getItem("tasks"))
            if(data){
                if(data[index].status == "Stopped" || data[index].status == "Idle"){
                    data[index].status = "Running";
                }
                else {
                    data[index].status = "Stopped";
                }
                localStorage.setItem("tasks", JSON.stringify(data))
                this.setState({
                    tasks: data
                })
            }
        }
    }

    startAllTask = () => {
        let data = []
        if(localStorage.getItem("tasks")){
            data = JSON.parse(localStorage.getItem("tasks"))
            if(data){
                for(var i=0; i<data.length; i++)
                {
                    data[i].status = "Running";
                }
                localStorage.setItem("tasks", JSON.stringify(data))
                this.setState({
                    tasks: data
                })
            }
        }
    }

    stopAllTask = () => {
        let data = []
        if(localStorage.getItem("tasks")){
            data = JSON.parse(localStorage.getItem("tasks"))
            if(data){
                for(var i=0; i<data.length; i++)
                {
                    data[i].status = "Stopped";
                }
                localStorage.setItem("tasks", JSON.stringify(data))
                this.setState({
                    tasks: data
                })
            }
        }
    }

    addTaskHandle = () => {
        this.setState({
            isEdit: false
        })
    }

    editTaskHandle = (index) => {
        this.setState({
            editIndex: index,
            isEdit: true
        })
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
                                                        <a className="btn " href="#exampleModalCenter1"  data-toggle="modal" data-target="#exampleModalCenter1" onClick={()=>this.addTaskHandle()}>Add Task</a>
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
                                                        {this.state.tasks ? this.state.tasks.map((task, index)=>{
                                                            return (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" 
                                                                                    className="custom-control-input" 
                                                                                    id="customCheck2" 
                                                                                    checked={this.state.indexArr.includes(index)}
                                                                                    onChange={()=>this.handleChangeIsChecked(index)}/>
                                                                                <label className="custom-control-label" htmlFor="customCheck2"></label>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{width: "15%", textAlign: "left"}}>
                                                                            <img src="Assets/images/supreme-logo.png" alt="" />
                                                                            <div className="company-name">{task.store} <br/>
                                                                                <span className="location">US Region</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>{task.product}</td>
                                                                        <td>{task.size}</td>
                                                                        <td>{task.profile}</td>
                                                                        <td>{task.status}</td>
                                                                        <td>
                                                                            <a href="#" className="btn-action" onClick={()=>this.runTask(index)}><i className="fa fa-play-circle-o"></i></a>
                                                                            <a className="btn-action"  href="#exampleModalCenter1" data-toggle="modal" ><i className="fa fa-pencil" onClick={()=>this.editTaskHandle(index)}></i></a>
                                                                            <a href="#" className="btn-action"><i className="fa fa-refresh"></i></a>
                                                                            <a href="#" className="btn-action" onClick={()=>this.deleteTask(index)}><i className="fa fa-trash-o"></i></a>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                        }) : <tr></tr>}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <a className="btn btn-add" onClick={()=>this.startAllTask()}><i className="fa fa-play"></i> Start Task</a>
                                            <a className="btn btn-all" onClick={()=>this.stopAllTask()}><i className="fa fa-stop"></i> Stop Task</a>
                                            <a className="btn btn-test" onClick={()=>this.deleteAllTasks()}><i className="fa fa-trash-o"></i> Clear Task</a>
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
                                <h5 className="modal-title" id="exampleModalCenterTitle">{this.state.isEdit ? "Edit Task" : "Create Task"}</h5>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Store</label>
                                                <select className="form-control form-control-sm"
                                                    value={this.state.store}
                                                    onChange={this.handleChangeStore}>
                                                    <option value="null" disabled>Select Store</option>
                                                    <option value="supreme">Supreme US</option>
                                                    <option value="shopify">Shopify</option>
                                                    <option value="yeezy">Yeezy Supply</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Size</label>
                                                <select className="form-control form-control-sm"
                                                    value={this.state.size}
                                                    onChange={this.handleChangeSize}>
                                                    <option value="null">Select Size</option>
                                                    <option value="small">Small</option>
                                                    <option value="large">Large</option>
                                                    <option value="extra-large">Extra Large</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Product</label>
                                                <div className="form-group has-search">
                                                    <span className="fa fa-search form-control-feedback"></span>
                                                    <input type="text" 
                                                        className="form-control form-control-sm" 
                                                        placeholder="Search"
                                                        value={this.state.product}
                                                        onChange={this.handleChangeProduct} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Profile</label>
                                                <select className="form-control form-control-sm"
                                                    value={this.state.profile}
                                                    onChange={this.handleChangeProfile}>
                                                    <option value="null" disabled>Select Profile</option>
                                                    {this.state.profiles ? this.state.profiles.map((profile, index)=>{
                                                        return (
                                                            <option value={profile.profileName} key={index}>{profile.profileName}</option>
                                                        )
                                                    }) : ''}
                                                </select>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Schedule</label>
                                                <div className="input-group date has-search2">
                                                    <input type='text' 
                                                        className="form-control form-control-sm" 
                                                        placeholder="Select Time" 
                                                        id='datetimepicker1'
                                                        // value={this.state.dateTime}
                                                        // onChange={this.handleTaskDateChange}
                                                    />
                                                    <span className="fa fa-calendar form-control-feedback2"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Checkout Delay</label>
                                                <div className="form-group date">
                                                    <input type='text' 
                                                        className="form-control form-control-sm" 
                                                        placeholder="Enter Number" 
                                                        pattern="[0-9]*"
                                                        value={this.state.delay}
                                                        onChange={this.handleChangeDelay}/>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Color</label>
                                                <div className="form-group date">
                                                    <input type='text' 
                                                        className="form-control form-control-sm" 
                                                        placeholder="Enter Color" 
                                                        value={this.state.color}
                                                        onChange={this.handleChangeColor} />                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="bottom-btns">
                                                <div className="btn-number">
                                                    <div className="value-button" id="decrease" onClick={()=>this.decreaseValue()}><i className="fa fa-minus"></i></div>
                                                    <input type="number" id="number" value={this.state.taskCount} onChange={e=>this.handleTaskCountChange}/>
                                                    <div className="value-button" id="increase" onClick={()=>this.increaseValue()}><i className="fa fa-plus"></i></div>
                                                </div>
                                                <button type="button" 
                                                    className="btn btn-create" 
                                                    data-dismiss="modal" 
                                                    aria-label="Close"
                                                    onClick={()=>this.createTask()}
                                                >{this.state.isEdit ? "Update" : "Create"}</button>
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
                                <i style={{color: "#fff", right: "38px", top: "25px", float: "right", position: "absolute", fontSize: "14px"}} className="fa fa-minus-square-o"></i>
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