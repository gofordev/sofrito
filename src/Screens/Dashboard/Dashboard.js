import React, {
    Component
} from 'react';
import isElectron from 'is-electron';
const Bot = require("../../modules/index");

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        try {
            this.test = JSON.parse(localStorage.getItem("tasks"));
        } catch (e) {
            this.test = null;
        };

        this.state = {
            taskCount: 1,
            dateTime: '',
            product: '',
            delay: 0,
            color: '',
            store: 'null',
            size: 'null',
            profile: 'null',
            editProduct: '',
            editDelay: 0,
            editColor: '',
            editStore: 'null',
            editSize: 'null',
            editProfile: 'null',
            profiles: [],
            tasks: null,
            indexArr: [],
            isEdit: false,
            editIndex: 0,
            massLink: '',
            massPassword: '',
            massDelay: '',
            total: this.test === null ? 0 : this.test.length,
            carted: global.carted,
            copped: global.copped,
            active: true,
            search: '',
            checked: [],
        }
    }

    componentDidMount() {
        if (isElectron()) {


            try {
                window.storage.get('tasks', function (error, data) {
                    //   if (error) throw error;
                    if (JSON.stringify(data.tasks) != null) {
                        localStorage.setItem("tasks", data.tasks)
                    }
                });
                window.storage.get('profiles', function (error, data) {
                    // if (error) throw error;
                    if (JSON.stringify(data.profiles) != null) {
                        localStorage.setItem("profiles", data.profiles)
                    }
                });
            } catch (e) {

            };

        }

        window.$(function () {
            window.$('#datetimepicker1').datetimepicker();
            window.$('#datetimepicker2').datetimepicker();
        });
        var data = []
        if (localStorage.getItem("profiles")) {
            data = JSON.parse(localStorage.getItem("profiles"))
            if (data) {
                this.setState({
                    profiles: data
                })
            }
        }
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"))
            if (data) {
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



    handleSearchChange = (event) => {
        let objects = [];


        if (localStorage.getItem("tasks")) {
            objects = JSON.parse(localStorage.getItem("tasks"))
        }

        function search(string) {
            let results = [];

            objects.forEach(obj => {
                if (JSON.stringify(obj).toLowerCase().indexOf(string.toLowerCase()) > -1) {

                    console.log(JSON.stringify(obj));
                    results.push(obj);
                };
            });

            return results;
        }


        if (search(event.target.value)) {
            this.setState({
                tasks: search(event.target.value)
            })
        }

        this.setState({
            search: event.target.value,
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

        console.log(event.target.value);
        this.setState({
            product: event.target.value
        })
    }

    handleChangeEditProduct = (event) => {
        this.setState({
            editProduct: event.target.value
        })
    }

    handleChangeProfile = (event) => {
        this.setState({
            profile: event.target.value
        })
    }

    handleChangeEditProfile = (event) => {
        this.setState({
            editProfile: event.target.value
        })
    }

    handleChangeStore = (event) => {
        this.setState({
            store: event.target.value
        })
    }

    handleChangeEditStore = (event) => {
        this.setState({
            editStore: event.target.value
        })
    }

    handleChangeSize = (event) => {
        this.setState({
            size: event.target.value
        })
    }

    handleChangeEditSize = (event) => {
        this.setState({
            editSize: event.target.value
        })
    }

    handleChangeDelay = (event) => {
        this.setState({
            delay: (event.target.validity.valid) ? event.target.value : this.state.delay
        })
    }

    handleChangeEditDelay = (event) => {
        this.setState({
            editDelay: (event.target.validity.valid) ? event.target.value : this.state.delay
        })
    }

    handleChangeColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    handleChangeEditColor = (event) => {
        this.setState({
            editColor: event.target.value
        })
    }

    handleChangeIsChecked = (index) => {
        if (this.state.indexArr.includes(index)) {
            this.setState({
                indexArr: this.state.indexArr.pop(index)
            })
        } else {
            this.setState({
                indexArr: this.state.indexArr.push(index)
            })
        }
    }

    handleChangeMassLink = (event) => {

        //  console.log(this.state.massLink);

        this.setState({
            massLink: event.target.value
        })
    }

    handleChangeMassPassword = (event) => {
        this.setState({
            massPassword: event.target.value
        })
    }

    handleChangeMassDelay = (event) => {
        this.setState({
            massDelay: (event.target.validity.valid) ? event.target.value : this.state.delay
        })
    }

    createTask() {
        let obj = {};
        if (!this.state.isEdit) {
            obj["store"] = this.state.store;
            obj["size"] = this.state.size;
            obj["product"] = this.state.product;
            obj["profile"] = this.state.profile;
            obj["schedule_time"] = document.getElementById("datetimepicker1").value;
            obj["delay"] = this.state.delay;
            obj["color"] = this.state.color;
            obj["status"] = "Idle"
        } else {
            obj["store"] = this.state.editStore;
            obj["size"] = this.state.editSize;
            obj["product"] = this.state.editProduct;
            obj["profile"] = this.state.editProfile;
            obj["schedule_time"] = document.getElementById("datetimepicker2").value;
            obj["delay"] = this.state.editDelay;
            obj["color"] = this.state.editColor;
            obj["status"] = "Idle"
        }
        const taskCount = parseInt(this.state.taskCount);

        if (!this.state.isEdit && !this.state.product) {
            alert("Please fill in all the fields.")

        } else {
            if (this.state.isEdit) {
                console.log("update task", obj);
                this.editTask("tasks", obj);
            } else {
                for (var i = 0; i < taskCount; i++) {
                    this.addTask("tasks", obj);
                }
            }
            console.log("create task", obj);
            var data = []
            if (localStorage.getItem("tasks")) {
                data = JSON.parse(localStorage.getItem("tasks"))
                if (data) {
                    this.setState({
                        tasks: data
                    })
                }
            }
        }
    }

    addTask = (t, obj) => {
        let data = []

        if (localStorage.getItem(t)) {
            data = JSON.parse(localStorage.getItem(t))
            if (data) {
                obj["id"] = data[data.length - 1] ? data[data.length - 1].id + 1 : 1
                data.push(obj)
                localStorage.setItem(t, JSON.stringify(data));
                this.state.total = data.length;

                this.setState({
                    tasks: data,
                })

            }
        } else {
            obj["id"] = 1
            data.push(obj)
            localStorage.setItem(t, JSON.stringify(data));
            this.state.total = data.length;

            this.setState({
                tasks: this.state.tasks,
            })
        }
        return data
    }

    editTask = (t, obj) => {
        let data = []
        var index = this.state.editIndex;
        if (localStorage.getItem(t)) {
            data = JSON.parse(localStorage.getItem(t))
            if (data) {
                data[index] = obj;
                localStorage.setItem(t, JSON.stringify(data))
            }
        }
        return data
    }

    deleteTask = (index) => {
        let data = []
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"))
            if (data) {
                data.splice(index, 1)
                localStorage.setItem("tasks", JSON.stringify(data));
                this.state.total = data.length;

                this.setState({
                    tasks: data
                })
            }
        }
    }

    deleteAllTasks = () => {
        localStorage.setItem("tasks", JSON.stringify([]))
        this.state.total = 0;
        this.setState({
            tasks: null
        })
    }


    startTask = (obj) => {
        let bot = new Bot(obj);

        bot.on("status", obj => {
            console.log("not like this");

            this.updateStatus(obj);
        });

        bot.on("carted", n => {


            global.carted++;


            console.log(global.carted);

            this.setState({
                carted: global.carted,
            });

            // this.state.carted++;
        });

        bot.on("copped", n => {
            console.log("hey");
            this.setState({
                copped: global.copped++,
            });
        });

        bot.init();
    };

    updateStatus = (obj) => {

        function search(string, objects) {
            let results = [];

            objects.forEach(obj => {
                if (JSON.stringify(obj).toLowerCase().indexOf(string.toLowerCase()) > -1) {

                    console.log(JSON.stringify(obj));
                    results.push(obj);
                };
            });

            return results;
        }


        let data = []
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"));

            if (data !== null) {
                let index = data.findIndex((obj1 => obj1.id == obj.id))

                if (data[index] === undefined) return;
                data[index].status = obj.status;
                console.log('sdj', obj, index, data)

                localStorage.setItem("tasks", JSON.stringify(data))
                this.setState({
                    tasks: search(this.state.search, data)
                })
            }
        }
    }


    runTask = (index) => {
        let data = []
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"))
            if (data) {
                if (data[index].status == "Stopping" || data[index].status == "Idle" || data[index].status == "Stopped") {
                    this.startTask(data[index]);
                } else {
                    data[index].status = "Stopping";

                    console.log(data[index].id);

                    //  console.log(global);
                    global.stopped[data[index]['id']] = "Stopping";
                    localStorage.setItem("tasks", JSON.stringify(data))
                    this.setState({
                        tasks: data
                    })
                }
            }
        }
    }

    startAllTask = () => {
        let data = []
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"))
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    this.startTask(data[i]);
                }
            }
        }
    }

    stopAllTask = () => {
        let data = []
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"))
            if (data) {
                for (var i = 0; i < data.length; i++) {

                    if (data[i].status === "Idle" || data[i].status === "Stopped") return;

                    global.stopped[data[i]['id']] = "Stopping";

                    data[i].status = "Stopping";
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

        let data = []
        let obj = {}
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"))
            if (data) {
                obj = data[index]
            }
        }
        this.setState({
            editStore: obj.store,
            editSize: obj.size,
            editProduct: obj.product,
            editProfile: obj.profile,
            editDelay: obj.delay,
            editColor: obj.color,
            dateTime: obj.schedule_time,
            editIndex: index,
            isEdit: true
        })
    }

    statusColor = (index) => {
        let data = []
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"))
            if (data) {
                switch (data[index].status) {
                    case 'Idle':
                        return 'white'
                    case 'Stopping':
                        return 'white'
                    case 'Processing':
                        return 'yellow'
                    case 'Check Email':
                        return 'green'
                    case 'Card Declined.':
                        return 'red'
                    case 'Stopped':
                        return 'white'
                    case 'status works':
                        return 'green'
                    case 'status not works':
                        return 'yellow'
                    default:
                        return 'white'
                }
            }
        }
    }

    actionButtionClass = (index) => {
        let data = []
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"))
            if (data) {
                if (data[index].status == 'Idle' || data[index].status == 'Stopping' || data[index].status == 'Stopped') {
                    return 'fa fa-play-circle-o'
                } else {
                    return 'fa fa-stop-circle-o'
                }
            }
        }
    }


    openDialogImport = () => {

        const {
            dialog
        } = window.require('electron').remote;

        dialog.showOpenDialog({
            properties: ['openFile']
        }, (file) => {
            if (file !== undefined) {
                console.log(file);

                try {
                    let obj = JSON.parse(window.require("fs").readFileSync(file[0]).toString());

                    this.deleteAllTasks();

                    localStorage.setItem("tasks", JSON.stringify(obj));
                    this.state.total = obj.length;

                    this.setState({
                        tasks: obj
                    })



                } catch (e) {
                    console.log(e);
                }


            }
        });

    };


    openDialogExport = () => {

        const {
            dialog
        } = window.require('electron').remote;

        dialog.showSaveDialog({
            defaultPath: 'tasks.json'
        }, (fileName) => {
            if (fileName === undefined) {
                console.log("You didn't save the file");
                return;
            } else {
                try {
                    console.log("Writing File.")
                    window.require("fs").writeFile(fileName, JSON.stringify(JSON.parse(localStorage.getItem("tasks"))), (err) => {});
                } catch (e) {
                    console.log(e);
                };
            }
            //      fs.writeFile(fileName, accounts.join('\n'), (err) => {});
        });

    };


    getMassEditDelay = (event) => {

        let data = [];

        console.log("hello: " + event.target.value)
        global.delay = event.target.value;

        if (localStorage.getItem("settings")) {
            data = JSON.parse(localStorage.getItem("settings"))
            if (data) {
                this.setState({
                    monitorDelay: event.target.value,
                })
            }
        }
    }

    getMassLinkChange = (event) => {

        let data = [];
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"))
            if (data) {
                data.forEach(obj => {
                    obj.product = event.target.value;
                })

                this.setState({
                    tasks: data
                })
            }
        }


        console.log(event.target.value);
    };



    imagod = (o) => {
        for (let i = 0; i < 1000; i++) {
            this.state.checked[i] = true;
        }

        this.setState({
            checked: this.state.checked,
        })
        console.log("i am a god")
        console.log(o);
    };



    duplicateTask = (index) => {

        let data = [];
        if (localStorage.getItem("tasks")) {
            data = JSON.parse(localStorage.getItem("tasks"))
            if (data) {


                let task = data[index];

                data.push(task);



                //return console.log( data[data.length - 1].id + 1)
                data[data.length - 1].id = data[data.length - 1].id + 1;
                data[data.length - 1].status = "Idle";



                this.addTask("tasks", data[data.length - 1]);


            }
        }

    };

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
                                                        <i className="fa fa-plus"></i>
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
                                                        <a href="#" className="btn "onClick={()=>this.openDialogImport()}>Import</a>
                                                        <a href="#" className="btn "onClick={()=>this.openDialogExport()}>Export</a>
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
                                                        <i className="fa fa-pencil"></i>
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
                                                            <input type="text" 
                                                                name="link" 
                                                                className="form-control"
                                                                value={this.state.massLink}
                                                                onChange={this.handleChangeMassLink}
                                                                onKeyPress={event => {
                                                                    if (event.key === 'Enter') {
                                                                      this.getMassLinkChange(event);
                                                                    }
                                                                  }} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Password</label>
                                                            <input type="password" 
                                                                name="password" 
                                                                className="form-control"
                                                                value={this.state.massPassword}
                                                                onChange={this.handleChangeMassPassword} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Delay</label>
                                                            <input type="text" 
                                                                name="link"
                                                                pattern="[0-9]*"
                                                                value={this.state.massDelay}
                                                                onChange={this.handleChangeMassDelay}
                                                                className="form-control"
                                                                onKeyPress={event => {
                                                                    if (event.key === 'Enter') {
                                                                      this.getMassEditDelay(event);
                                                                    }
                                                                  }} />
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
                                                        <i className="fa fa-th-large"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="window-btns">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <a href="#" className="btn" id="captchabtn">Open Window</a>
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
                                                        <i className="fa fa-layer-group"></i>
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
                                                            <input type="text" className="form-control" placeholder="Search" value={this.state.search}
                                                        onChange={this.handleSearchChange}/>
                                                        </div>
                                                        <a className="collapse-card" data-toggle="collapse" href="#test-block" role="button" aria-expanded="false" aria-controls="test-block"><i className="fa fa-chevron-up"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="steps collapse show" id="test-block">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="step-number">
                                                            {this.state.total} 
                                                        </div>
                                                        <div className="step-title">
                                                            Total
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="step-number">
                                                            {this.state.carted}
                                                        </div>
                                                        <div className="step-title">
                                                            Carted
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="step-number">
                                                            {this.state.copped}
                                                        </div>
                                                        <div className="step-title">
                                                            Copped
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dashboard-table custom-scroll">
                                                <table className="table sortable">
                                                    <thead>
                                                        <tr>
                                                            <th style={{width: "2%"}}
                                                                className="sorttable_nosort">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input"onClick={()=>this.imagod()} id="customCheck1" />
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
                                                                                    id={index}
                                                                                    checked = {this.state.checked[index] === true ? true: this.state.checked[index]}
                                                                             //       checked={true}

                                                                                    // checked={this.state.indexArr.includes(index)}
                                                                                    // onChange={()=>this.handleChangeIsChecked(index)}
                                                                                />
                                                                                <label className="custom-control-label" htmlFor={index}></label>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{width: "15%", textAlign: "left"}}>
                                                                            <img src={"Assets/images/" + task.store.toLowerCase() + "-logo.png"} alt="" />
                                                                            <div className="company-name">{task.store} <br/>
                                                                                <span className="location">US Region</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>{task.product}</td>
                                                                        <td>{task.size}</td>
                                                                        <td>{task.profile}</td>
                                                                        <td style={{color: this.statusColor(index)}}>{task.status}</td>
                                                                        <td>
                                                                            <a href="#" className="btn-action" onClick={()=>this.runTask(index)}><i className={this.actionButtionClass(index)}></i></a>
                                                                            <a className="btn-action"  href="#exampleModalCenter3" data-toggle="modal" ><i className="fa fa-pencil" onClick={()=>this.editTaskHandle(index)}></i></a>
                                                                            <a href="#" className="btn-action" onClick={()=>this.duplicateTask(index)} ><i className="fa fa-refresh"></i></a>
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
                                            <a className="btn btn-add" onClick={()=>this.startAllTask()}><i className="fa fa-play"></i> Start All</a>
                                            <a className="btn btn-all" onClick={()=>this.stopAllTask()}><i className="fa fa-stop"></i> Stop All</a>
                                            <a className="btn btn-test" onClick={()=>this.deleteAllTasks()}><i className="fa fa-trash-o"></i> Clear Task</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Create Task Modal */}
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
                                                <select className="form-control form-control-sm"
                                                    value={this.state.store}
                                                    onChange={this.handleChangeStore}>
                                                    <option value="null" disabled>Select Store</option>
                                                    <option value="Supreme">Supreme US</option>
                                                    <option value="Shopify">Shopify</option>
                                                    <option value="Yeezy">Yeezy Supply</option>
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
                {/* Edit Task Modal */}
                <div className="modal modal2 fade" id="exampleModalCenter3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h5 className="modal-title" id="exampleModalCenterTitle">Edit Task</h5>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Store</label>
                                                <select className="form-control form-control-sm"
                                                    value={this.state.editStore}
                                                    onChange={this.handleChangeEditStore}>
                                                    <option value="null" disabled>Select Store</option>
                                                    <option value="Supreme">Supreme US</option>
                                                    <option value="Shopify">Shopify</option>
                                                    <option value="Yeezy">Yeezy Supply</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Size</label>
                                                <select className="form-control form-control-sm"
                                                    value={this.state.editSize}
                                                    onChange={this.handleChangeEditSize}>
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
                                                        value={this.state.editProduct}
                                                        onChange={this.handleChangeEditProduct} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Profile</label>
                                                <select className="form-control form-control-sm"
                                                    value={this.state.editProfile}
                                                    onChange={this.handleChangeEditProfile}>
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
                                                        id='datetimepicker2'
                                                        value={this.state.dateTime}
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
                                                        value={this.state.editDelay}
                                                        onChange={this.handleChangeEditDelay}/>

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
                                                        value={this.state.editColor}
                                                        onChange={this.handleChangeEditColor} />                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="bottom-btns">
                                                <button type="button" 
                                                    className="btn btn-create" 
                                                    data-dismiss="modal" 
                                                    aria-label="Close"
                                                    style={{marginLeft: "55%"}}
                                                    onClick={()=>this.createTask()}
                                                >Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}