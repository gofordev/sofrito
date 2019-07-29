import React, { Component } from 'react';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monitorDelay: '',
            errorDelay: '',
            apiKey: '',
            antiApiKey: '',
            webhookURL: '',
            quantityOfTask: '',
            captcha: false,
            desktop: true,
            sound: true
        }
    }

    handleChangeMonitorDelay = (event) => {
        this.setState({
            monitorDelay: event.target.value
        });
    }

    handleChangeErrorDelay = (event) => {
        this.setState({
            errorDelay: event.target.value
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

    handleChangeCaptcha = (event) => {
        this.setState({
            captcha: !event.target.value
        })
    }

    handleChangeDesktop = (event) => {
        this.setState({
            desktop: !event.target.value
        })
    }

    handleChangeSound = (event) => {
        this.setState({
            sound: !event.target.value
        })
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
                                    <div className="setting-information" style={{marginTop: "50px"}}>
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
                                                                        onChange={e=>this.handleChangeMonitorDelay}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label>Error delay (ms) </label>
                                                                    <input type="text" 
                                                                        className="form-control form-control-sm" 
                                                                        placeholder="0" 
                                                                        onChange={e=>this.handleChangeErrorDelay}/>
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
                                                                        onChange={e=>this.handleChangeApiKey}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label>Anti Captcha</label>
                                                                    <input type="text"
                                                                        className="form-control form-control-sm" 
                                                                        placeholder="Enter Api Key" 
                                                                        onChange={e=>this.handleChangeAntiApiKey}/>
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
                                                                                defaultChecked={this.state.captcha}
                                                                                onChange={e=>this.handleChangeCaptcha}
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
                                                                                defaultChecked={this.state.desktop}
                                                                                onChange={e=>this.handleChangeDesktop}
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
                                                                                defaultChecked={this.state.sound}
                                                                                onChange={e=>this.handleChangeSound}
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
                                                        <a href="#" className="btn btn-support">Contact Support</a>
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
                                                                            placeholder="Discover Webhook URL"
                                                                            onChange={e=>this.handleChangeWebhookURL}
                                                                        />
                                                                        <span className="fab fa-discord form-control-feedback2"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="form-group">
                                                                    <a href="#" className="btn btn-test">Test</a>
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
                                                                            <select className="form-control form-control-sm">
                                                                                <option>Size</option>
                                                                                <option>Size</option>
                                                                                <option>Size</option>
                                                                                <option>Size</option>
                                                                            </select>
                                                                        </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                            <select className="form-control form-control-sm">
                                                                                <option>Profile</option>
                                                                                <option>Profile</option>
                                                                                <option>Profile</option>
                                                                                <option>Profile</option>
                                                                                
                                                                            </select>
                                                                        </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group" style={{marginTop: "10px"}}>
                                                                    <input type="text" 
                                                                        className="form-control form-control-sm" 
                                                                        placeholder="Quantity of Task" 
                                                                        onChange={e=>this.handleChangeQuantityOfTask}/>
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
                                    <a href="#" className="btn btn-save">Save</a>
                                
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}