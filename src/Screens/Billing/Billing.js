import React, { Component } from 'react';

export default class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billingFirstName: '',
            billingLastName: '',
            billingAddress: '',
            billingAptSuite: '',
            billingCity: '',
            billingZipCode: '',
            profileExample: '',
            profileEmail: '',
            profilePhone: '',
            paymentName: '',
            paymentCardNumber: '',
            paymentExpairy: '',
            paymentCSV: '',
            shippingFirstName: '',
            shippingLastName: '',
            shippingAddress: '',
            shippingAptSuite: '',
            shippingCity: '',
            shippingZipeCode: ''
        }
    }

    handleChangeBillingFirstName = (event) => {
        this.setState({
            billingFirstName: event.target.value
        });
    }

    handleChangeBillingLastName = (event) => {
        this.setState({
            billingLastName: event.target.value
        });
    }

    handleChangeBillingAddress = (event) => {
        this.setState({
            billingAddress: event.target.value
        });        
    }

    handleChangeBillingAptSuite = (event) => {
        this.setState({
            billingAptSuite: event.target.value
        });        
    }

    handleChangeBillingCity = (event) => {
        this.setState({
            billingCity: event.target.value
        });             
    }

    handleChangeBillingZipCode = (event) => {
        this.setState({
            billingZipCode: event.target.value
        });             
    }

    handleChangeProfileExample = (event) => {
        this.setState({
            profileExample: event.target.value
        });             
    }

    handleChangeProfileEmail = (event) => {
        this.setState({
            profileEmail: event.target.value
        });             
    }

    handleChangeProfilePhone = (event) => {
        this.setState({
            profilePhone: event.target.value
        });   
    }

    handleChangePaymentName = (event) => {
        this.setState({
            paymentName: event.target.value
        });    
    }

    handleChangePaymentCardNumber = (event) => {
        this.setState({
            paymentCardNumber: event.target.value
        });    
    }

    handleChangePaymentExpairy = (event) => {
        this.setState({
            paymentExpairy: event.target.value
        });    
    }

    handleChangePaymentCSV = (event) => {
        this.setState({
            paymentCSV: event.target.value
        });    
    }
    handleChangeShippingFirstName = (event) => {
        this.setState({
            shippingFirstName: event.target.value
        });
    }

    handleChangeShippingLastName = (event) => {
        this.setState({
            shippingLastName: event.target.value
        });
    }

    handleChangeShippingAddress = (event) => {
        this.setState({
            shippingAddress: event.target.value
        });        
    }

    handleChangeShippingAptSuite = (event) => {
        this.setState({
            shippingAptSuite: event.target.value
        });        
    }

    handleChangeShippingCity = (event) => {
        this.setState({
            shippingCity: event.target.value
        });             
    }

    handleChangeShippingZipCode = (event) => {
        this.setState({
            shippingZipCode: event.target.value
        });             
    }

    render() {
        return(
            <div className="billing">
                <div className="tab-pane fade show active" id="billing" role="tabpanel" aria-labelledby="billing-tab">
                    <div className="main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="proxies proxies2 profile-card card text-white">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="heading">
                                                        Saved Profile
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="footsite footsite2">
                                                        <a href="#"><i className="fa fa-save"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">

                                            <div className="saved-profiles">
                                                <div className="row">
                                                    <div className="col-7">
                                                        <div className="title">
                                                            Example(US)
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="btns">
                                                            <a href="#" className="btn-action"><i className="fa fa-pencil"></i></a>
                                                            <a href="#" className="btn-action"><i className="fa fa-refresh"></i></a>
                                                            <a href="#" className="btn-action"><i className="fa fa-trash-o"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="saved-profiles">
                                                <div className="row">
                                                    <div className="col-7">
                                                        <div className="title">
                                                            Example(US)
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="btns">
                                                            <a href="#" className="btn-action"><i className="fa fa-pencil"></i></a>
                                                            <a href="#" className="btn-action"><i className="fa fa-refresh"></i></a>
                                                            <a href="#" className="btn-action"><i className="fa fa-trash-o"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="btn btn-import">Import</a>
                                            <a href="#" className="btn btn-import">Export</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="proxies proxies2 profile-card2 card text-white">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="heading">
                                                        Profile Creator
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="footsite footsite2">
                                                        <i style={{color: "#a7a9b7", fontSize: "20px"}} className="fa fa-user-circle-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="profile-information">
                                                <div className="container-fluid">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-6" style={{maxWidth: "415px"}}>
                                                                <div className="heading">
                                                                    Profile Information
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Example(US)" 
                                                                                onChange={e=>this.handleChangeProfileExample}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Email" 
                                                                                onChange={e=>this.handleChangeProfileEmail}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Phone" 
                                                                                onChange={e=>this.handleChangeProfilePhone}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6" style={{maxWidth: "415px", marginLeft: "50px"}}>
                                                                <div className="heading">
                                                                    Payment Information
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Name" 
                                                                                onChange={e=>this.handleChangePaymentName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Card Number" 
                                                                                onChange={e=>this.handleChangePaymentCardNumber}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Expairy" 
                                                                                onChange={e=>this.handleChangePaymentExpairy}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="CSV" 
                                                                                onChange={e=>this.handleChangePaymentCSV}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="profile-information">
                                                <div className="container-fluid">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-6" style={{maxWidth: "415px"}}>
                                                                <div className="heading">
                                                                    Shipping Information
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="First Name" 
                                                                                onChange={e=>this.handleChangeShippingFirstName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Last Name" 
                                                                                onChange={e=>this.handleChangeShippingLastName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Address" 
                                                                                onChange={e=>this.handleChangeShippingAddress}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Apt/Suite" 
                                                                                onChange={e=>this.handleChangeShippingAptSuite}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="City" 
                                                                                onChange={e=>this.handleChangeShippingCity}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Zip code" 
                                                                                onChange={e=>this.handleChangeShippingZipCode}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <div className="form-group">
                                                                                <select className="form-control form-control-sm">
                                                                                    <option>United States</option>
                                                                                    <option>United States</option>
                                                                                    <option>United States</option>
                                                                                    <option>United States</option>
                                                                                    <option>United States</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                        <select className="form-control form-control-sm">
                                                                            <option>California</option>
                                                                            <option>California</option>
                                                                            <option>California</option>
                                                                            <option>California</option>
                                                                            <option>California</option>
                                                                        </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6" style={{maxWidth: "415px", marginLeft: "50px"}}>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="heading">
                                                                            Billing Information 
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="custom-control custom-checkbox" style={{fontSize: "14px", color: "#a7a9b7"}}>
                                                                    <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                                    <label className="custom-control-label" htmlFor="customCheck5">Same as Shipping</label>
                                                                </div>
                                                                    </div>
                                                                </div>
                                                            
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text"
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="First Name" 
                                                                                onChange={e=>this.handleChangeBillingFirstName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Last Name" 
                                                                                onChange={e=>this.handleChangeBillingLastName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Address" 
                                                                                onChange={e=>this.handleChangeBillingAddress}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Apt/Suite" 
                                                                                onChange={e=>this.handleChangeBillingAptSuite}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="City" 
                                                                                onChange={e=>this.handleChangeBillingCity}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Zip code" 
                                                                                onChange={e=>this.handleChangeBillingZipCode}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <div className="form-group">
                                                                            
                                                                                <select className="form-control form-control-sm">
                                                                                    <option>United States</option>
                                                                                    <option>United States</option>
                                                                                    <option>United States</option>
                                                                                    <option>United States</option>
                                                                                    <option>United States</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                        <select className="form-control form-control-sm">
                                                                                    <option>California</option>
                                                                                    <option>California</option>
                                                                                    <option>California</option>
                                                                                    <option>California</option>
                                                                                    <option>California</option>
                                                                                </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="btn btn-add"><i className="fa fa-save"></i> Save Profile</a>
                                            <a href="#" className="btn btn-all"><i className="fa fa-trash-o"></i> Clear Fields</a>
                                            <a href="#" className="btn btn-test"><i className="fa fa-random"></i> Random Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}