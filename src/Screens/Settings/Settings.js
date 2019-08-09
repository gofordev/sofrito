import React, {
    Component
} from 'react';
import isElectron from 'is-electron';
const Discord = require('../../modules/discord/index');
//const { shell } = window.require('electron').shell; 

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monitorDelay: global.delay,
            errorDelay: '',
            apiKey: '',
            antiApiKey: '',
            webhookURL: '',
            captcha: false,
            desktop: false,
            sound: false,
            size: 'null',
            profile: 'null',
            quantityOfTask: '',
            profiles: []
        }
    }

    componentDidMount() {

        try {

            if (isElectron()) {
                window.storage.get('profiles', function (error, data) {
                    if (error) throw error;
                    if (JSON.stringify(data.profiles) != null) {
                        localStorage.setItem("profiles", data.profiles)
                    }
                });
                window.storage.get('settings', function (error, data) {
                    if (error) throw error;
                    if (JSON.stringify(data.settings) != null) {
                        localStorage.setItem("settings", data.settings)
                    }
                });
            }
        } catch (e) {

        };


        try {

            var data = []
            if (localStorage.getItem("profiles")) {
                data = JSON.parse(localStorage.getItem("profiles"))
                if (data) {
                    this.setState({
                        profiles: data
                    })
                }
            }
            if (localStorage.getItem("settings")) {
                data = JSON.parse(localStorage.getItem("settings"))
                if (data) {
                    this.setState({
                        monitorDelay: global.delay,
                        errorDelay: data[0].error_dealy,
                        apiKey: data[0].captcha.apiKey,
                        antiApiKey: data[0].captcha.antiApiKey,
                        webhookURL: data[0].webhooks,
                        captcha: data[0].notification.captcha,
                        desktop: data[0].notification.desktop,
                        sound: data[0].notification.sound,
                        size: data[0].quick_task.size,
                        profile: data[0].quick_task.profile,
                        quantityOfTask: data[0].quick_task.quantity_of_task,
                    })
                }
            }
        } catch (e) {
            console.log(e);
        }

    }

    handleChangeMonitorDelay = (event) => {
        this.setState({
            monitorDelay: (event.target.validity.valid) ? event.target.value : this.state.monitorDelay
        });
    }

    handleChangeErrorDelay = (event) => {
        this.setState({
            errorDelay: (event.target.validity.valid) ? event.target.value : this.state.errorDelay
        });
    }

    handleChangeApiKey = (event) => {
        this.setState({
            apiKey: event.target.value
        });
    }

    handleChangeAntiApiKey = (event) => {
        this.setState({
            antiApiKey: event.target.value
        });
    }

    handleChangeWebhookURL = (event) => {
        this.setState({
            webhookURL: event.target.value
        })
    }

    handleChangeQuantityOfTask = (event) => {
        this.setState({
            quantityOfTask: event.target.value
        })
    }

    handleChangeCaptcha = () => {
        this.setState({
            captcha: !this.state.captcha
        })
    }

    handleChangeDesktop = () => {
        this.setState({
            desktop: !this.state.desktop
        })
    }

    handleChangeSound = () => {
        this.setState({
            sound: !this.state.sound
        })
    }

    handleChangeSize = (event) => {
        this.setState({
            size: event.target.value
        })
    }

    handleChangeProfile = (event) => {
        this.setState({
            profile: event.target.value
        })
    }

    saveSettings = () => {
        let obj = {
            notification: {},
            captcha: {},
            quick_task: {}
        };
        obj["monitor_delay"] = this.state.monitorDelay;
        obj["error_dealy"] = this.state.errorDelay;
        obj["notification"]["captcha"] = this.state.captcha;
        obj["notification"]["desktop"] = this.state.desktop;
        obj["notification"]["sound"] = this.state.sound;
        obj["webhooks"] = this.state.webhookURL;
        obj["quick_task"]["size"] = this.state.size;
        obj["quick_task"]["profile"] = this.state.profile;
        obj["quick_task"]["quantity_of_task"] = this.state.quantityOfTask;
        obj["captcha"]["apiKey"] = this.state.apiKey;
        obj["captcha"]["antiApiKey"] = this.state.antiApiKey;

        console.log("obj", obj);
        this.addSettings("settings", obj);
        alert("Settings are saved successfully")
    }


    openSupport = () => {
        window.require('electron').shell.openExternal("https://twitter.com/blasmoji");
    };

    sendWebhook = () => {
        new Discord({
            url: this.state.webhookURL,
        }).sendWebhook();
    };

    addSettings(t, obj) {
        let data = []
        if (localStorage.getItem(t)) {
            data = JSON.parse(localStorage.getItem(t))
            if (data) {
                let index = data.findIndex((obj1 => obj1.profileName == obj.profileName))
                console.log("Index : " + index)
                if (index >= 0) {
                    data[0] = Object.assign(data[0], obj);
                    localStorage.setItem(t, JSON.stringify(data))
                    return data
                }
                data.push(obj)
                localStorage.setItem(t, JSON.stringify(data))
            }
        } else {
            data.push(obj)
            localStorage.setItem(t, JSON.stringify(data))
        }
        return data
    }

    render() {
        return(
            <div className="settings">
                <div className="tab-pane fade show active" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    <div className="main">
                        <div className="container-fluid">
                            <div className="proxies proxies2 setting-card card text-white">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="heading">
                                                Settings
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="footsite footsite2">
                                                <i style={{color: "#a7a9b7", fontSize: "20px"}} className="fa fa-cog"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="setting-information" style={{marginTop: "30px"}}>
                                        <div className="container">
                                            <form>
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div className="heading">
                                                            Gerenal
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label>Monitor delay (ms) </label>
                                                                    <input type="text" 
                                                                        className="form-control form-control-sm" 
                                                                        placeholder="3500" 
                                                                        pattern="[0-9]*"
                                                                        value={this.state.monitorDelay}
                                                                        onChange={this.handleChangeMonitorDelay}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label>Error delay (ms) </label>
                                                                    <input type="text" 
                                                                        className="form-control form-control-sm" 
                                                                        placeholder="0" 
                                                                        pattern="[0-9]*"
                                                                        value={this.state.errorDelay}
                                                                        onChange={this.handleChangeErrorDelay}/>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-5 offset-1">
                                                        <div className="heading">
                                                            Captcha
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label>2 Captcha</label>
                                                                    <input type="text" 
                                                                        className="form-control form-control-sm" 
                                                                        placeholder="Enter Api Key" 
                                                                        value={this.state.apiKey}
                                                                        onChange={this.handleChangeApiKey}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label>Anti Captcha</label>
                                                                    <input type="text"
                                                                        className="form-control form-control-sm" 
                                                                        placeholder="Enter Api Key" 
                                                                        value={this.state.antiApiKey}
                                                                        onChange={this.handleChangeAntiApiKey}/>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div className="heading">
                                                            Notification
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <div className="row notification">
                                                                    <div className="col-md-7">
                                                                        <span>Captcha</span>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="switch">
                                                                            <input id="cmn-toggle-4" 
                                                                                className="cmn-toggle cmn-toggle-round-flat" 
                                                                                type="checkbox"
                                                                                checked={this.state.captcha}
                                                                                onChange={this.handleChangeCaptcha}
                                                                            />
                                                                            <label htmlFor="cmn-toggle-4"></label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="row notification">
                                                                    <div className="col-md-7">
                                                                        <span>Desktop</span>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="switch">
                                                                            <input id="cmn-toggle-5" 
                                                                                className="cmn-toggle cmn-toggle-round-flat" 
                                                                                type="checkbox"
                                                                                checked={this.state.desktop}
                                                                                onChange={this.handleChangeDesktop}
                                                                            /> 
                                                                            <label htmlFor="cmn-toggle-5"></label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="row notification" style={{borderRight: "none"}}>
                                                                    <div className="col-md-7">
                                                                        <span>Sound</span>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="switch">
                                                                            <input id="cmn-toggle-6" 
                                                                                className="cmn-toggle cmn-toggle-round-flat" 
                                                                                type="checkbox"
                                                                                checked={this.state.sound}
                                                                                onChange={this.handleChangeSound}
                                                                            />
                                                                            <label htmlFor="cmn-toggle-6"></label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-5 offset-1">
                                                        <div className="heading">
                                                            Help
                                                        </div>
                                                        <a href="#" className="btn btn-support" onClick={()=>this.openSupport()}>Contact Support</a>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div className="heading">
                                                            Webhook
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-9">
                                                                <div className="form-group">
                                                                    <div className="input-group date has-search2">
                                                                        <input type='text' 
                                                                            className="form-control form-control-sm" 
                                                                            placeholder="Discord Webhook URL"
                                                                            value={this.state.webhookURL}
                                                                            onChange={this.handleChangeWebhookURL}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="form-group">
                                                                    <a href="#" className="btn btn-test" onClick={()=>this.sendWebhook()} >Test</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-5 offset-1">
                                                        <div className="heading">
                                                        Key
                                                        </div>
                                                        <a href="#" className="btn btn-key">Reset</a>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div className="heading">
                                                        Quick Task
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                            <select className="form-control form-control-sm"
                                                                                value={this.state.size}
                                                                                onChange={this.handleChangeSize}>
                                                                                <option value="null" disabled>Select Size</option>
                                                                                <option value="small">Small</option>
                                                                                <option value="large">Large</option>
                                                                                <option value="extra-large">Extra Large</option>
                                                                            </select>
                                                                        </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
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
                                                            <div className="col-6">
                                                                <div className="form-group" style={{marginTop: "10px"}}>
                                                                    <input type="text" 
                                                                        className="form-control form-control-sm" 
                                                                        placeholder="Quantity of Task" 
                                                                        value={this.state.quantityOfTask}
                                                                        onChange={this.handleChangeQuantityOfTask}/>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                <div className="col-5 offset-1">
                                                        <div className="heading">
                                                        Version
                                                        </div>
                                                    1.00
                                                </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a className="btn btn-save" onClick={()=>this.saveSettings()}>Save</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}