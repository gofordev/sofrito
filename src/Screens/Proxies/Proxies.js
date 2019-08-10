import React, {
    Component
} from 'react';
import isElectron from 'is-electron';
const ProxyTester = require("../../modules/proxy-tester/index");


export default class Proxies extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            proxies: '',
            isMonitorProxies: true,
            monitorProxies: null,
            taskProxies: null
        })
    }




    componentWillMount() {

        try {

            if (isElectron()) {
                window.storage.get('monitor_proxies', function (error, data) {
                    if (error) throw error;
                    if (JSON.stringify(data.monitor_proxies) != null) {
                        localStorage.setItem("monitor_proxies", data.monitor_proxies)
                    }
                });

                window.storage.get('task_proxies', function (error, data) {
                    if (error) throw error;
                    if (JSON.stringify(data.task_proxies) != null) {
                        localStorage.setItem("task_proxies", data.task_proxies)
                    }
                });
            }

        } catch (e) {

        };


        let data = []
        if (localStorage.getItem("monitor_proxies")) {
            data = JSON.parse(localStorage.getItem("monitor_proxies"));
            if (data) {
                data = data.filter(obj => obj.ip !== undefined);
                global.proxies = data;
                this.setState({
                    monitorProxies: data
                })
            }
        }
        if (localStorage.getItem("task_proxies")) {
            data = JSON.parse(localStorage.getItem("task_proxies"));
            if (data) {
                data = data.filter(obj => obj.ip !== undefined);
                global.proxies = data;
                this.setState({
                    taskProxies: data
                })
            }
        }
    }



    testProxy = (index, num) => {
        if (num == 0) {

            let data = [];

            if (localStorage.getItem("monitor_proxies")) {
                data = JSON.parse(localStorage.getItem("monitor_proxies"));
                if (data) {
                    data = data.filter(obj => obj.ip !== undefined);

                    let bot = new ProxyTester(data[index]);
                    bot.on("status", o => {
                        data[index].speed = o.speed;
    
                        console.log(data[index]);
                        localStorage.setItem("monitor_proxies", JSON.stringify(data))
                        this.setState({
                            monitorProxies: data
                        });
                        console.log("Status:");
                    });
                    bot.init(); 
                }
            }

        } else {

            let data = [];

            if (localStorage.getItem("task_proxies")) {
                data = JSON.parse(localStorage.getItem("task_proxies"));
                if(data) {
                    data = data.filter(obj => obj.ip !== undefined);

                    let bot = new ProxyTester(data[index]);
                    bot.on("status", o => {
                        data[index].speed = o.speed;
                        localStorage.setItem("task_proxies", JSON.stringify(data))
                        this.setState({
                            taskProxies: data
                        });
                        console.log("Status:");
                    });
                    bot.init();
                }
            }
        };
    };

    testAllProxies = (num) => {
        if (num == 0) {

            let data = [];

            if (localStorage.getItem("monitor_proxies")) {
                data = JSON.parse(localStorage.getItem("monitor_proxies"));
                if(data) {
                    data = data.filter(obj => obj.ip !== undefined);
                    data.forEach(async obj => {
                        let bot = new ProxyTester(obj);
                        bot.on("status", o => {
                            obj.speed = o.speed;
                            localStorage.setItem("monitor_proxies", JSON.stringify(data))
                            this.setState({
                                monitorProxies: data
                            });
                            console.log("Status:");
                            console.log(obj);
                        });
                        bot.init();
    
                    });
                }
            }
        } else {

            let data = [];

            if (localStorage.getItem("task_proxies")) {
                data = JSON.parse(localStorage.getItem("task_proxies"));
                if(data)
                {
                    data = data.filter(obj => obj.ip !== undefined);
                    data.forEach(async obj => {
                        let bot = new ProxyTester(obj);
                        bot.on("status", o => {
                            obj.speed = o.speed;
                            localStorage.setItem("task_proxies", JSON.stringify(data))
                            this.setState({
                                taskProxies: data
                            });
                            console.log("Status:");
                            console.log(obj);
                        });
                        bot.init();
    
                    });
                }
            }
        }

    };

    importFromFile = () => {
        document.getElementById('fileid').click();
    }

    handleChangeProxies = (event) => {
        this.setState({
            proxies: event.target.value
        })
    }

    addProxies = () => {
        var arr = this.state.proxies.split("\n");
        var arr1 = [];
        var data = [];

        arr = arr.filter(proxy => proxy.split(":").length > 2 && proxy !== undefined && proxy !== "" && proxy !== " ")

        for (let i = 0; i < arr.length; i++) {
            arr1[i] = arr[i].split(":");
            let temp = []
            for (let i = 0; i < arr1.length; i++) {
                temp = arr1[i]

                arr1[i] = {
                    ip: temp[0],
                    port: temp[1],
                    username: temp[2],
                    password: temp[3],
                    speed: 'Idle'
                }
                if (this.state.isMonitorProxies) {
                    data = this.add("monitor_proxies", arr1[i]);

                    console.log(data);

                    data = data.filter(obj => obj.ip !== undefined);

                    global.proxies = data;

                    this.setState({
                        monitorProxies: data
                    })
                } else {
                    data = this.add("task_proxies", arr1[i]);
                    data = data.filter(obj => obj.ip !== undefined);
                    global.proxies = data;

                    console.log(data)
                    this.setState({
                        taskProxies: data
                    })
                }
            }
        }


    }

    deleteProxy = (index, isWhichProxy) => {
        if (isWhichProxy == 0) {
            let data = []
            if (localStorage.getItem("monitor_proxies")) {
                data = JSON.parse(localStorage.getItem("monitor_proxies"))
                if (data) {
                    data.splice(index, 1)
                    data = data.filter(obj => obj.ip !== undefined);
                    global.proxies = data;


                    localStorage.setItem("monitor_proxies", JSON.stringify(data))


                    this.setState({
                        monitorProxies: data
                    })
                }
            }
        } else {
            let data = []
            if (localStorage.getItem("task_proxies")) {
                data = JSON.parse(localStorage.getItem("task_proxies"))
                if (data) {
                    data.splice(index, 1)
                    data = data.filter(obj => obj.ip !== undefined);
                    global.proxies = data;

                    localStorage.setItem("task_proxies", JSON.stringify(data))
                    this.setState({
                        taskProxies: data
                    })
                }
            }
        }
    }

    deleteAllProxies = (isWhichProxy) => {
        if (isWhichProxy == 0) {
            localStorage.setItem("monitor_proxies", JSON.stringify([]))
            this.setState({
                monitorProxies: null
            })
        } else {
            localStorage.setItem("task_proxies", JSON.stringify([]))
            this.setState({
                taskProxies: null
            })
        }
    }

    add = (t, obj) => {
        let data = []
        if (localStorage.getItem(t)) {
            data = JSON.parse(localStorage.getItem(t))
            if (data) {
                data = data.filter(obj => obj.ip !== undefined);
                global.proxies = data;

                obj["id"] = data.length + 1
                data.push(obj)
                localStorage.setItem(t, JSON.stringify(data))
            }
        } else {
            data = data.filter(obj => obj.ip !== undefined);
            global.proxies = data;

            obj["id"] = 1
            data.push(obj)
            localStorage.setItem(t, JSON.stringify(data))
        }
        return data
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
                                        <div className="proxies-table custom-scroll">
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
                                                    {this.state.monitorProxies ? this.state.monitorProxies.map((monitorProxy, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{index+1}</td>
                                                                <td>{monitorProxy.ip}</td>
                                                                <td>{monitorProxy.port}</td>
                                                                <td>{monitorProxy.username}</td>
                                                                <td>{monitorProxy.password}</td>
                                                                <td> {monitorProxy.speed}</td>
                                                                {/* <td className={monitorProxy.speed == "-" ? "text-danger" : "text-success"}>{monitorProxy.speed}</td> */}
                                                                <td>
                                                                    <a href="#" className="btn-action" onClick={()=>this.testProxy(index, 0)}><i
                                                                        className="fa fa-play-circle-o"></i></a>
                                                                    <a href="#" className="btn-action" onClick={()=>this.deleteProxy(index,0)}><i className="fa fa-trash-o"></i></a>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }) : <tr></tr>}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#exampleModalCenter" className="btn btn-add" data-toggle="modal"
                                            data-target="#exampleModalCenter" onClick={()=>this.setState({isMonitorProxies: true})}><i className="fa fa-plus-circle"></i>
                                            Add Proxies
                                        </a>
                                        <a href="#" className="btn btn-test"onClick={()=>this.testAllProxies(0)}><i className="fa fa-play"></i> Test</a>
                                        <a href="#" className="btn btn-all" onClick={()=>this.deleteAllProxies(0)}><i className="fa fa-trash-o"></i> Clear All</a>
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
                                        <div className="proxies-table custom-scroll">
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
                                                    {this.state.taskProxies ? this.state.taskProxies.map((taskProxy, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>{index+1}</td>
                                                                    <td>{taskProxy.ip}</td>
                                                                    <td>{taskProxy.port}</td>
                                                                    <td>{taskProxy.username}</td>
                                                                    <td>{taskProxy.password}</td>
                                                                    <td>{taskProxy.speed}</td>
                                                                    <td>
                                                                        <a href="#" className="btn-action"onClick={()=>this.testProxy(index, 1)}><i
                                                                            className="fa fa-play-circle-o"></i></a>
                                                                        <a href="#" className="btn-action" onClick={()=>this.deleteProxy(index,1)}><i className="fa fa-trash-o"></i></a>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }) : <tr></tr>}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#exampleModalCenter" className="btn btn-add" data-toggle="modal"
                                            data-target="#exampleModalCenter" onClick={()=>this.setState({isMonitorProxies: false})}><i className="fa fa-plus-circle"></i>
                                            Add Proxies
                                        </a>
                                        <a href="#" className="btn btn-test" onClick={()=>this.testAllProxies(1)} ><i className="fa fa-play"></i> Test All</a>
                                        <a href="#" className="btn btn-all" onClick={()=>this.deleteAllProxies(1)}><i className="fa fa-trash-o"></i> Clear All</a>
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
                                    <textarea className="form-control textarea1" 
                                        rows="10"
                                        placeholder="Enter Proxies As IP:PORT:USER:PASS"
                                        value={this.state.proxies}
                                        onChange={this.handleChangeProxies}></textarea>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-add1" data-dismiss="modal" aria-label="Close" onClick={()=>this.addProxies()}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}