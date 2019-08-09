import React, {
    Component
} from 'react';
import isElectron from 'is-electron';

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
            profileName: '',
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
            shippingZipCode: '',
            sameAsShipping: false,
            shippingCountry: 'null',
            shippingState: 'null',
            billingCountry: 'null',
            billingState: 'null',
            savedProfiles: null,
        }
    }

    componentDidMount() {

        try {

            let data = []
            if (localStorage.getItem("profiles")) {
                data = JSON.parse(localStorage.getItem("profiles"))
                if (data) {
                    this.setState({
                        savedProfiles: data
                    })
                }
            }
        } catch (e) {

        };

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

    handleChangeProfileName = (event) => {
        this.setState({
            profileName: event.target.value
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

    handleChangeSameAsShipping = (event) => {
        this.setState({
            sameAsShipping: !this.state.sameAsShipping
        })
    }

    handleChangeShippingCountry = (event) => {
        this.setState({
            shippingCountry: event.target.value
        })
    }

    handleChangeShippingState = (event) => {
        this.setState({
            shippingState: event.target.value
        })
    }

    handleChangeBillingCountry = (event) => {
        this.setState({
            billingCountry: event.target.value
        })
    }

    handleChangeBillingState = (event) => {
        this.setState({
            billingState: event.target.value
        })
    }

    clearFields = () => {
        this.setState({
            billingFirstName: '',
            billingLastName: '',
            billingAddress: '',
            billingAptSuite: '',
            billingCity: '',
            billingZipCode: '',
            profileName: '',
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
            shippingZipCode: '',
            shippingCountry: 'null',
            shippingState: 'null',
            billingCountry: 'null',
            billingState: 'null',
        })
    }

    createNewProfile = () => {
        let obj = {
            card: {},
            billing: {},
            shipping: {}
        }
        obj["profileName"] = this.state.profileName;
        obj["profileEmail"] = this.state.profileEmail;
        obj["profilePhone"] = this.state.profilePhone;

        obj["card"]["name"] = this.state.paymentName;
        obj["card"]["number"] = this.state.paymentCardNumber;
        obj["card"]["expairy"] = this.state.paymentExpairy;
        obj["card"]["csv"] = this.state.paymentCSV;

        obj["shipping"]["profileName"] = this.state.profileName;
        obj["shipping"]["first_name"] = this.state.shippingFirstName;
        obj["shipping"]["last_name"] = this.state.shippingLastName;
        obj["shipping"]["address"] = this.state.shippingAddress;
        obj["shipping"]["apt_suite"] = this.state.shippingAptSuite;
        obj["shipping"]["zip_code"] = this.state.shippingZipCode;
        obj["shipping"]["city"] = this.state.shippingCity;
        obj["shipping"]["country"] = this.state.shippingCountry;
        obj["shipping"]["state"] = this.state.shippingState;

        if (this.state.sameAsShipping) {
            obj["billing"]["first_name"] = this.state.shippingFirstName;
            obj["billing"]["last_name"] = this.state.shippingLastName;
            obj["billing"]["address"] = this.state.shippingAddress;
            obj["billing"]["apt_suite"] = this.state.shippingAptSuite;
            obj["billing"]["zip_code"] = this.state.shippingZipCode;
            obj["billing"]["city"] = this.state.shippingCity;
            obj["billing"]["country"] = this.state.shippingCountry;
            obj["billing"]["state"] = this.state.shippingState;
        } else {
            obj["billing"]["first_name"] = this.state.billingFirstName;
            obj["billing"]["last_name"] = this.state.billingLastName;
            obj["billing"]["address"] = this.state.billingAddress;
            obj["billing"]["apt_suite"] = this.state.billingAptSuite;
            obj["billing"]["zip_code"] = this.state.billingZipCode
            obj["billing"]["city"] = this.state.billingCity;
            obj["billing"]["country"] = this.state.billingCountry;
            obj["billing"]["state"] = this.state.billingState;
        }

        console.log("saving billing info")

        console.log(obj);
        if (obj.profileName == "") {
            alert("You must fill the profile name field")
        } else {
            var AllProfiles = this.addProfile("profiles", obj);
            this.setState({
                savedProfiles: AllProfiles
            })
            this.clearFields();
        }
    }

    randomCreate = () => {
        this.setState({
            billingFirstName: 'random',
            billingLastName: 'random',
            billingAddress: 'random',
            billingAptSuite: 'random',
            billingCity: 'random',
            billingZipCode: '123',
            profileName: this.makeString(4),
            profileEmail: 'random',
            profilePhone: '123',
            paymentName: 'random',
            paymentCardNumber: '123',
            paymentExpairy: '2019/12',
            paymentCSV: '123',
            shippingFirstName: 'random',
            shippingLastName: 'random',
            shippingAddress: 'random',
            shippingAptSuite: 'random',
            shippingCity: 'random',
            shippingZipCode: '123',
            shippingCountry: 'OM',
            shippingState: 'MT',
            billingCountry: 'OM',
            billingState: 'MT',
        })
    }

    makeString = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    editProfile = (index) => {
        let data = []
        let selectedProfile = {}
        if (localStorage.getItem("profiles")) {
            data = JSON.parse(localStorage.getItem("profiles"))
            if (data) {
                selectedProfile = data[index]
            }
        }
        console.log("index", selectedProfile)

        this.setState({
            profileName: selectedProfile["profileName"],
            profileEmail: selectedProfile["profileEmail"],
            profilePhone: selectedProfile["profilePhone"],
            paymentName: selectedProfile["card"]["name"],
            paymentCardNumber: selectedProfile["card"]["number"],
            paymentExpairy: selectedProfile["card"]["expairy"],
            paymentCSV: selectedProfile["card"]["csv"],
            profileName: selectedProfile["shipping"]["profileName"],
            shippingFirstName: selectedProfile["shipping"]["first_name"],
            shippingLastName: selectedProfile["shipping"]["last_name"],
            shippingAddress: selectedProfile["shipping"]["address"],
            shippingAptSuite: selectedProfile["shipping"]["apt_suite"],
            shippingZipCode: selectedProfile["shipping"]["zip_code"],
            shippingCity: selectedProfile["shipping"]["city"],
            shippingCountry: selectedProfile["shipping"]["country"],
            shippingState: selectedProfile["shipping"]["state"],
            billingFirstName: selectedProfile["billing"]["first_name"],
            billingLastName: selectedProfile["billing"]["last_name"],
            billingAddress: selectedProfile["billing"]["address"],
            billingAptSuite: selectedProfile["billing"]["apt_suite"],
            billingZipCode: selectedProfile["billing"]["zip_code"],
            billingCity: selectedProfile["billing"]["city"],
            billingCountry: selectedProfile["billing"]["country"],
            billingState: selectedProfile["billing"]["state"]
        })
    }




    duplicateProfile = (index) => {
        let data = []
        if (localStorage.getItem("profiles")) {
            data = JSON.parse(localStorage.getItem("profiles"))
            if (data) {
                let profile = data[index]


                data.push(profile);

                let string = this.makeString(2);
                //return console.log( data[data.length - 1].id + 1)
                data[index + 1].id = data[index + 1].id + 1;
                data[index + 1].id = data[index + 1].profileName = data[index + 1].id = data[index + 1].profileName + " " + string;
                data[index + 1].id = data[index + 1].shipping.profileName = data[index + 1].id = data[index + 1].shipping.profileName + " " + string;


                console.log(data[index + 1])


                let selectedProfile = data[index + 1];
                var AllProfiles = this.addProfile("profiles", data[index + 1]);

                this.setState({
                    profileName: selectedProfile["profileName"],
                    profileEmail: selectedProfile["profileEmail"],
                    profilePhone: selectedProfile["profilePhone"],
                    paymentName: selectedProfile["card"]["name"],
                    paymentCardNumber: selectedProfile["card"]["number"],
                    paymentExpairy: selectedProfile["card"]["expairy"],
                    paymentCSV: selectedProfile["card"]["csv"],
                    profileName: selectedProfile["shipping"]["profileName"],
                    shippingFirstName: selectedProfile["shipping"]["first_name"],
                    shippingLastName: selectedProfile["shipping"]["last_name"],
                    shippingAddress: selectedProfile["shipping"]["address"],
                    shippingAptSuite: selectedProfile["shipping"]["apt_suite"],
                    shippingZipCode: selectedProfile["shipping"]["zip_code"],
                    shippingCity: selectedProfile["shipping"]["city"],
                    shippingCountry: selectedProfile["shipping"]["country"],
                    shippingState: selectedProfile["shipping"]["state"],
                    billingFirstName: selectedProfile["billing"]["first_name"],
                    billingLastName: selectedProfile["billing"]["last_name"],
                    billingAddress: selectedProfile["billing"]["address"],
                    billingAptSuite: selectedProfile["billing"]["apt_suite"],
                    billingZipCode: selectedProfile["billing"]["zip_code"],
                    billingCity: selectedProfile["billing"]["city"],
                    billingCountry: selectedProfile["billing"]["country"],
                    billingState: selectedProfile["billing"]["state"]
                });

                this.setState({
                    savedProfiles: AllProfiles
                })



                //  this.clearFields();



            }
        }

    };


    addProfile = (t, obj) => {
        let data = []

        if (localStorage.getItem(t)) {
            data = JSON.parse(localStorage.getItem(t))
            if (data) {
                let index = data.findIndex((obj1 => obj1.profileName == obj.profileName))
                if (index >= 0) {
                    data[index] = Object.assign(data[index], obj);
                    localStorage.setItem(t, JSON.stringify(data))
                    return data
                }
                obj["id"] = data.length + 1
                data.push(obj)
                localStorage.setItem(t, JSON.stringify(data));

                this.setState({
                    savedProfiles: data
                })
            }
        } else {
            obj["id"] = 1
            data.push(obj)
            localStorage.setItem(t, JSON.stringify(data));

            this.setState({
                savedProfiles: data
            })
        }
        return data
    }

    deleteProfile = (index) => {
        let data = []
        if (localStorage.getItem("profiles")) {
            data = JSON.parse(localStorage.getItem("profiles"))
            if (data) {
                data.splice(index, 1)
                localStorage.setItem("profiles", JSON.stringify(data))
                this.setState({
                    savedProfiles: data
                })
            }
        }
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
                                                        <i className="fa fa-save"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body saved-profile custom-scroll">
                                            {this.state.savedProfiles ? this.state.savedProfiles.map((profile, index) => {
                                                return (
                                                    <div className="saved-profiles" key={index}>
                                                        <div className="row">
                                                            <div className="col-7">
                                                                <div className="title">
                                                                    {profile.profileName}
                                                                </div>
                                                            </div>
                                                            <div className="col-5">
                                                                <div className="btns">
                                                                    <a href="#" className="btn-action" onClick={()=>this.editProfile(index)}><i className="fa fa-pencil"></i></a>
                                                                    <a href="#" className="btn-action" onClick={()=>this.duplicateProfile(index)}><i className="fa fa-refresh"></i></a>
                                                                    <a href="#" className="btn-action" onClick={()=>this.deleteProfile(index)}><i className="fa fa-trash-o"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }) : ''}
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
                                                                                value={this.state.profileName}
                                                                                onChange={this.handleChangeProfileName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Email" 
                                                                                value={this.state.profileEmail}
                                                                                onChange={this.handleChangeProfileEmail}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Phone" 
                                                                                value={this.state.profilePhone}
                                                                                onChange={this.handleChangeProfilePhone}/>
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
                                                                                value={this.state.paymentName}
                                                                                onChange={this.handleChangePaymentName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Card Number" 
                                                                                value={this.state.paymentCardNumber}
                                                                                onChange={this.handleChangePaymentCardNumber}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Expairy" 
                                                                                value={this.state.paymentExpairy}
                                                                                onChange={this.handleChangePaymentExpairy}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="CSV" 
                                                                                value={this.state.paymentCSV}
                                                                                onChange={this.handleChangePaymentCSV}/>
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
                                                                                value={this.state.shippingFirstName}
                                                                                onChange={this.handleChangeShippingFirstName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Last Name" 
                                                                                value={this.state.shippingLastName}
                                                                                onChange={this.handleChangeShippingLastName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Address" 
                                                                                value={this.state.shippingAddress}
                                                                                onChange={this.handleChangeShippingAddress}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Apt/Suite" 
                                                                                value={this.state.shippingAptSuite}
                                                                                onChange={this.handleChangeShippingAptSuite}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="City" 
                                                                                value={this.state.shippingCity}
                                                                                onChange={this.handleChangeShippingCity}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Zip code" 
                                                                                value={this.state.shippingZipCode}
                                                                                onChange={this.handleChangeShippingZipCode}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <div className="form-group">
                                                                                <select className="form-control form-control-sm"
                                                                                    value={this.state.shippingCountry}
                                                                                    onChange={this.handleChangeShippingCountry}>
                                                                                    <option value="null" disabled>Select Country</option>
                                                                                    <option value="AF">Afghanistan</option>
                                                                                    <option value="AX">Åland Islands</option>
                                                                                    <option value="AL">Albania</option>
                                                                                    <option value="DZ">Algeria</option>
                                                                                    <option value="AS">American Samoa</option>
                                                                                    <option value="AD">Andorra</option>
                                                                                    <option value="AO">Angola</option>
                                                                                    <option value="AI">Anguilla</option>
                                                                                    <option value="AQ">Antarctica</option>
                                                                                    <option value="AG">Antigua and Barbuda</option>
                                                                                    <option value="AR">Argentina</option>
                                                                                    <option value="AM">Armenia</option>
                                                                                    <option value="AW">Aruba</option>
                                                                                    <option value="AU">Australia</option>
                                                                                    <option value="AT">Austria</option>
                                                                                    <option value="AZ">Azerbaijan</option>
                                                                                    <option value="BS">Bahamas</option>
                                                                                    <option value="BH">Bahrain</option>
                                                                                    <option value="BD">Bangladesh</option>
                                                                                    <option value="BB">Barbados</option>
                                                                                    <option value="BY">Belarus</option>
                                                                                    <option value="BE">Belgium</option>
                                                                                    <option value="BZ">Belize</option>
                                                                                    <option value="BJ">Benin</option>
                                                                                    <option value="BM">Bermuda</option>
                                                                                    <option value="BT">Bhutan</option>
                                                                                    <option value="BO">Bolivia, Plurinational State of
                                                                                    </option>
                                                                                    <option value="BQ">Bonaire, Sint Eustatius and Saba
                                                                                    </option>
                                                                                    <option value="BA">Bosnia and Herzegovina</option>
                                                                                    <option value="BW">Botswana</option>
                                                                                    <option value="BV">Bouvet Island</option>
                                                                                    <option value="BR">Brazil</option>
                                                                                    <option value="IO">British Indian Ocean Territory
                                                                                    </option>
                                                                                    <option value="BN">Brunei Darussalam</option>
                                                                                    <option value="BG">Bulgaria</option>
                                                                                    <option value="BF">Burkina Faso</option>
                                                                                    <option value="BI">Burundi</option>
                                                                                    <option value="KH">Cambodia</option>
                                                                                    <option value="CM">Cameroon</option>
                                                                                    <option value="CA">Canada</option>
                                                                                    <option value="CV">Cape Verde</option>
                                                                                    <option value="KY">Cayman Islands</option>
                                                                                    <option value="CF">Central African Republic</option>
                                                                                    <option value="TD">Chad</option>
                                                                                    <option value="CL">Chile</option>
                                                                                    <option value="CN">China</option>
                                                                                    <option value="CX">Christmas Island</option>
                                                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                                                    <option value="CO">Colombia</option>
                                                                                    <option value="KM">Comoros</option>
                                                                                    <option value="CG">Congo</option>
                                                                                    <option value="CD">Congo, the Democratic Republic of the
                                                                                    </option>
                                                                                    <option value="CK">Cook Islands</option>
                                                                                    <option value="CR">Costa Rica</option>
                                                                                    <option value="CI">Côte d'Ivoire</option>
                                                                                    <option value="HR">Croatia</option>
                                                                                    <option value="CU">Cuba</option>
                                                                                    <option value="CW">Curaçao</option>
                                                                                    <option value="CY">Cyprus</option>
                                                                                    <option value="CZ">Czech Republic</option>
                                                                                    <option value="DK">Denmark</option>
                                                                                    <option value="DJ">Djibouti</option>
                                                                                    <option value="DM">Dominica</option>
                                                                                    <option value="DO">Dominican Republic</option>
                                                                                    <option value="EC">Ecuador</option>
                                                                                    <option value="EG">Egypt</option>
                                                                                    <option value="SV">El Salvador</option>
                                                                                    <option value="GQ">Equatorial Guinea</option>
                                                                                    <option value="ER">Eritrea</option>
                                                                                    <option value="EE">Estonia</option>
                                                                                    <option value="ET">Ethiopia</option>
                                                                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                                                                    <option value="FO">Faroe Islands</option>
                                                                                    <option value="FJ">Fiji</option>
                                                                                    <option value="FI">Finland</option>
                                                                                    <option value="FR">France</option>
                                                                                    <option value="GF">French Guiana</option>
                                                                                    <option value="PF">French Polynesia</option>
                                                                                    <option value="TF">French Southern Territories</option>
                                                                                    <option value="GA">Gabon</option>
                                                                                    <option value="GM">Gambia</option>
                                                                                    <option value="GE">Georgia</option>
                                                                                    <option value="DE">Germany</option>
                                                                                    <option value="GH">Ghana</option>
                                                                                    <option value="GI">Gibraltar</option>
                                                                                    <option value="GR">Greece</option>
                                                                                    <option value="GL">Greenland</option>
                                                                                    <option value="GD">Grenada</option>
                                                                                    <option value="GP">Guadeloupe</option>
                                                                                    <option value="GU">Guam</option>
                                                                                    <option value="GT">Guatemala</option>
                                                                                    <option value="GG">Guernsey</option>
                                                                                    <option value="GN">Guinea</option>
                                                                                    <option value="GW">Guinea-Bissau</option>
                                                                                    <option value="GY">Guyana</option>
                                                                                    <option value="HT">Haiti</option>
                                                                                    <option value="HM">Heard Island and McDonald Islands
                                                                                    </option>
                                                                                    <option value="VA">Holy See (Vatican City State)
                                                                                    </option>
                                                                                    <option value="HN">Honduras</option>
                                                                                    <option value="HK">Hong Kong</option>
                                                                                    <option value="HU">Hungary</option>
                                                                                    <option value="IS">Iceland</option>
                                                                                    <option value="IN">India</option>
                                                                                    <option value="ID">Indonesia</option>
                                                                                    <option value="IR">Iran, Islamic Republic of</option>
                                                                                    <option value="IQ">Iraq</option>
                                                                                    <option value="IE">Ireland</option>
                                                                                    <option value="IM">Isle of Man</option>
                                                                                    <option value="IL">Israel</option>
                                                                                    <option value="IT">Italy</option>
                                                                                    <option value="JM">Jamaica</option>
                                                                                    <option value="JP">Japan</option>
                                                                                    <option value="JE">Jersey</option>
                                                                                    <option value="JO">Jordan</option>
                                                                                    <option value="KZ">Kazakhstan</option>
                                                                                    <option value="KE">Kenya</option>
                                                                                    <option value="KI">Kiribati</option>
                                                                                    <option value="KP">Korea, Democratic People's Republic
                                                                                        of</option>
                                                                                    <option value="KR">Korea, Republic of</option>
                                                                                    <option value="KW">Kuwait</option>
                                                                                    <option value="KG">Kyrgyzstan</option>
                                                                                    <option value="LA">Lao People's Democratic Republic
                                                                                    </option>
                                                                                    <option value="LV">Latvia</option>
                                                                                    <option value="LB">Lebanon</option>
                                                                                    <option value="LS">Lesotho</option>
                                                                                    <option value="LR">Liberia</option>
                                                                                    <option value="LY">Libya</option>
                                                                                    <option value="LI">Liechtenstein</option>
                                                                                    <option value="LT">Lithuania</option>
                                                                                    <option value="LU">Luxembourg</option>
                                                                                    <option value="MO">Macao</option>
                                                                                    <option value="MK">Macedonia, the former Yugoslav
                                                                                        Republic of</option>
                                                                                    <option value="MG">Madagascar</option>
                                                                                    <option value="MW">Malawi</option>
                                                                                    <option value="MY">Malaysia</option>
                                                                                    <option value="MV">Maldives</option>
                                                                                    <option value="ML">Mali</option>
                                                                                    <option value="MT">Malta</option>
                                                                                    <option value="MH">Marshall Islands</option>
                                                                                    <option value="MQ">Martinique</option>
                                                                                    <option value="MR">Mauritania</option>
                                                                                    <option value="MU">Mauritius</option>
                                                                                    <option value="YT">Mayotte</option>
                                                                                    <option value="MX">Mexico</option>
                                                                                    <option value="FM">Micronesia, Federated States of
                                                                                    </option>
                                                                                    <option value="MD">Moldova, Republic of</option>
                                                                                    <option value="MC">Monaco</option>
                                                                                    <option value="MN">Mongolia</option>
                                                                                    <option value="ME">Montenegro</option>
                                                                                    <option value="MS">Montserrat</option>
                                                                                    <option value="MA">Morocco</option>
                                                                                    <option value="MZ">Mozambique</option>
                                                                                    <option value="MM">Myanmar</option>
                                                                                    <option value="NA">Namibia</option>
                                                                                    <option value="NR">Nauru</option>
                                                                                    <option value="NP">Nepal</option>
                                                                                    <option value="NL">Netherlands</option>
                                                                                    <option value="NC">New Caledonia</option>
                                                                                    <option value="NZ">New Zealand</option>
                                                                                    <option value="NI">Nicaragua</option>
                                                                                    <option value="NE">Niger</option>
                                                                                    <option value="NG">Nigeria</option>
                                                                                    <option value="NU">Niue</option>
                                                                                    <option value="NF">Norfolk Island</option>
                                                                                    <option value="MP">Northern Mariana Islands</option>
                                                                                    <option value="NO">Norway</option>
                                                                                    <option value="OM">Oman</option>
                                                                                    <option value="PK">Pakistan</option>
                                                                                    <option value="PW">Palau</option>
                                                                                    <option value="PS">Palestinian Territory, Occupied
                                                                                    </option>
                                                                                    <option value="PA">Panama</option>
                                                                                    <option value="PG">Papua New Guinea</option>
                                                                                    <option value="PY">Paraguay</option>
                                                                                    <option value="PE">Peru</option>
                                                                                    <option value="PH">Philippines</option>
                                                                                    <option value="PN">Pitcairn</option>
                                                                                    <option value="PL">Poland</option>
                                                                                    <option value="PT">Portugal</option>
                                                                                    <option value="PR">Puerto Rico</option>
                                                                                    <option value="QA">Qatar</option>
                                                                                    <option value="RE">Réunion</option>
                                                                                    <option value="RO">Romania</option>
                                                                                    <option value="RU">Russian Federation</option>
                                                                                    <option value="RW">Rwanda</option>
                                                                                    <option value="BL">Saint Barthélemy</option>
                                                                                    <option value="SH">Saint Helena, Ascension and Tristan
                                                                                        da Cunha</option>
                                                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                                                    <option value="LC">Saint Lucia</option>
                                                                                    <option value="MF">Saint Martin (French part)</option>
                                                                                    <option value="PM">Saint Pierre and Miquelon</option>
                                                                                    <option value="VC">Saint Vincent and the Grenadines
                                                                                    </option>
                                                                                    <option value="WS">Samoa</option>
                                                                                    <option value="SM">San Marino</option>
                                                                                    <option value="ST">Sao Tome and Principe</option>
                                                                                    <option value="SA">Saudi Arabia</option>
                                                                                    <option value="SN">Senegal</option>
                                                                                    <option value="RS">Serbia</option>
                                                                                    <option value="SC">Seychelles</option>
                                                                                    <option value="SL">Sierra Leone</option>
                                                                                    <option value="SG">Singapore</option>
                                                                                    <option value="SX">Sint Maarten (Dutch part)</option>
                                                                                    <option value="SK">Slovakia</option>
                                                                                    <option value="SI">Slovenia</option>
                                                                                    <option value="SB">Solomon Islands</option>
                                                                                    <option value="SO">Somalia</option>
                                                                                    <option value="ZA">South Africa</option>
                                                                                    <option value="GS">South Georgia and the South Sandwich
                                                                                        Islands</option>
                                                                                    <option value="SS">South Sudan</option>
                                                                                    <option value="ES">Spain</option>
                                                                                    <option value="LK">Sri Lanka</option>
                                                                                    <option value="SD">Sudan</option>
                                                                                    <option value="SR">Suriname</option>
                                                                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                                                                    <option value="SZ">Swaziland</option>
                                                                                    <option value="SE">Sweden</option>
                                                                                    <option value="CH">Switzerland</option>
                                                                                    <option value="SY">Syrian Arab Republic</option>
                                                                                    <option value="TW">Taiwan, Province of China</option>
                                                                                    <option value="TJ">Tajikistan</option>
                                                                                    <option value="TZ">Tanzania, United Republic of</option>
                                                                                    <option value="TH">Thailand</option>
                                                                                    <option value="TL">Timor-Leste</option>
                                                                                    <option value="TG">Togo</option>
                                                                                    <option value="TK">Tokelau</option>
                                                                                    <option value="TO">Tonga</option>
                                                                                    <option value="TT">Trinidad and Tobago</option>
                                                                                    <option value="TN">Tunisia</option>
                                                                                    <option value="TR">Turkey</option>
                                                                                    <option value="TM">Turkmenistan</option>
                                                                                    <option value="TC">Turks and Caicos Islands</option>
                                                                                    <option value="TV">Tuvalu</option>
                                                                                    <option value="UG">Uganda</option>
                                                                                    <option value="UA">Ukraine</option>
                                                                                    <option value="AE">United Arab Emirates</option>
                                                                                    <option value="GB">United Kingdom</option>
                                                                                    <option value="US">United States</option>
                                                                                    <option value="UM">United States Minor Outlying Islands
                                                                                    </option>
                                                                                    <option value="UY">Uruguay</option>
                                                                                    <option value="UZ">Uzbekistan</option>
                                                                                    <option value="VU">Vanuatu</option>
                                                                                    <option value="VE">Venezuela, Bolivarian Republic of
                                                                                    </option>
                                                                                    <option value="VN">Viet Nam</option>
                                                                                    <option value="VG">Virgin Islands, British</option>
                                                                                    <option value="VI">Virgin Islands, U.S.</option>
                                                                                    <option value="WF">Wallis and Futuna</option>
                                                                                    <option value="EH">Western Sahara</option>
                                                                                    <option value="YE">Yemen</option>
                                                                                    <option value="ZM">Zambia</option>
                                                                                    <option value="ZW">Zimbabwe</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                        <select className="form-control form-control-sm"
                                                                            value={this.state.shippingState}
                                                                            onChange={this.handleChangeShippingState}>
                                                                            <option value="null" disabled>Select State</option>
                                                                            <option value="AL">Alabama</option>
                                                                            <option value="AK">Alaska</option>
                                                                            <option value="AZ">Arizona</option>
                                                                            <option value="AR">Arkansas</option>
                                                                            <option value="CA">California</option>
                                                                            <option value="CO">Colorado</option>
                                                                            <option value="CT">Connecticut</option>
                                                                            <option value="DE">Delaware</option>
                                                                            <option value="DC">District Of Columbia</option>
                                                                            <option value="FL">Florida</option>
                                                                            <option value="GA">Georgia</option>
                                                                            <option value="HI">Hawaii</option>
                                                                            <option value="ID">Idaho</option>
                                                                            <option value="IL">Illinois</option>
                                                                            <option value="IN">Indiana</option>
                                                                            <option value="IA">Iowa</option>
                                                                            <option value="KS">Kansas</option>
                                                                            <option value="KY">Kentucky</option>
                                                                            <option value="LA">Louisiana</option>
                                                                            <option value="ME">Maine</option>
                                                                            <option value="MD">Maryland</option>
                                                                            <option value="MA">Massachusetts</option>
                                                                            <option value="MI">Michigan</option>
                                                                            <option value="MN">Minnesota</option>
                                                                            <option value="MS">Mississippi</option>
                                                                            <option value="MO">Missouri</option>
                                                                            <option value="MT">Montana</option>
                                                                            <option value="NE">Nebraska</option>
                                                                            <option value="NV">Nevada</option>
                                                                            <option value="NH">New Hampshire</option>
                                                                            <option value="NJ">New Jersey</option>
                                                                            <option value="NM">New Mexico</option>
                                                                            <option value="NY">New York</option>
                                                                            <option value="NC">North Carolina</option>
                                                                            <option value="ND">North Dakota</option>
                                                                            <option value="OH">Ohio</option>
                                                                            <option value="OK">Oklahoma</option>
                                                                            <option value="OR">Oregon</option>
                                                                            <option value="PA">Pennsylvania</option>
                                                                            <option value="RI">Rhode Island</option>
                                                                            <option value="SC">South Carolina</option>
                                                                            <option value="SD">South Dakota</option>
                                                                            <option value="TN">Tennessee</option>
                                                                            <option value="TX">Texas</option>
                                                                            <option value="UT">Utah</option>
                                                                            <option value="VT">Vermont</option>
                                                                            <option value="VA">Virginia</option>
                                                                            <option value="WA">Washington</option>
                                                                            <option value="WV">West Virginia</option>
                                                                            <option value="WI">Wisconsin</option>
                                                                            <option value="WY">Wyoming</option>
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
                                                                    <input type="checkbox" 
                                                                        className="custom-control-input" 
                                                                        id="customCheck5" 
                                                                        onChange={this.handleChangeSameAsShipping}/>
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
                                                                                value={this.state.billingFirstName}
                                                                                onChange={this.handleChangeBillingFirstName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Last Name" 
                                                                                value={this.state.billingLastName}
                                                                                onChange={this.handleChangeBillingLastName}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Address" 
                                                                                value={this.state.billingAddress}
                                                                                onChange={this.handleChangeBillingAddress}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Apt/Suite" 
                                                                                value={this.state.billingAptSuite}
                                                                                onChange={this.handleChangeBillingAptSuite}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="City" 
                                                                                value={this.state.billingCity}
                                                                                onChange={this.handleChangeBillingCity}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control form-control-sm" 
                                                                                placeholder="Zip code" 
                                                                                value={this.state.billingZipCode}
                                                                                onChange={this.handleChangeBillingZipCode}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <div className="form-group">
                                                                                <select className="form-control form-control-sm"
                                                                                    value={this.state.billingCountry}
                                                                                    onChange={this.handleChangeBillingCountry}>
                                                                                    <option value="null" disabled>Select Country</option>
                                                                                    <option value="AF">Afghanistan</option>
                                                                                    <option value="AX">Åland Islands</option>
                                                                                    <option value="AL">Albania</option>
                                                                                    <option value="DZ">Algeria</option>
                                                                                    <option value="AS">American Samoa</option>
                                                                                    <option value="AD">Andorra</option>
                                                                                    <option value="AO">Angola</option>
                                                                                    <option value="AI">Anguilla</option>
                                                                                    <option value="AQ">Antarctica</option>
                                                                                    <option value="AG">Antigua and Barbuda</option>
                                                                                    <option value="AR">Argentina</option>
                                                                                    <option value="AM">Armenia</option>
                                                                                    <option value="AW">Aruba</option>
                                                                                    <option value="AU">Australia</option>
                                                                                    <option value="AT">Austria</option>
                                                                                    <option value="AZ">Azerbaijan</option>
                                                                                    <option value="BS">Bahamas</option>
                                                                                    <option value="BH">Bahrain</option>
                                                                                    <option value="BD">Bangladesh</option>
                                                                                    <option value="BB">Barbados</option>
                                                                                    <option value="BY">Belarus</option>
                                                                                    <option value="BE">Belgium</option>
                                                                                    <option value="BZ">Belize</option>
                                                                                    <option value="BJ">Benin</option>
                                                                                    <option value="BM">Bermuda</option>
                                                                                    <option value="BT">Bhutan</option>
                                                                                    <option value="BO">Bolivia, Plurinational State of
                                                                                    </option>
                                                                                    <option value="BQ">Bonaire, Sint Eustatius and Saba
                                                                                    </option>
                                                                                    <option value="BA">Bosnia and Herzegovina</option>
                                                                                    <option value="BW">Botswana</option>
                                                                                    <option value="BV">Bouvet Island</option>
                                                                                    <option value="BR">Brazil</option>
                                                                                    <option value="IO">British Indian Ocean Territory
                                                                                    </option>
                                                                                    <option value="BN">Brunei Darussalam</option>
                                                                                    <option value="BG">Bulgaria</option>
                                                                                    <option value="BF">Burkina Faso</option>
                                                                                    <option value="BI">Burundi</option>
                                                                                    <option value="KH">Cambodia</option>
                                                                                    <option value="CM">Cameroon</option>
                                                                                    <option value="CA">Canada</option>
                                                                                    <option value="CV">Cape Verde</option>
                                                                                    <option value="KY">Cayman Islands</option>
                                                                                    <option value="CF">Central African Republic</option>
                                                                                    <option value="TD">Chad</option>
                                                                                    <option value="CL">Chile</option>
                                                                                    <option value="CN">China</option>
                                                                                    <option value="CX">Christmas Island</option>
                                                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                                                    <option value="CO">Colombia</option>
                                                                                    <option value="KM">Comoros</option>
                                                                                    <option value="CG">Congo</option>
                                                                                    <option value="CD">Congo, the Democratic Republic of the
                                                                                    </option>
                                                                                    <option value="CK">Cook Islands</option>
                                                                                    <option value="CR">Costa Rica</option>
                                                                                    <option value="CI">Côte d'Ivoire</option>
                                                                                    <option value="HR">Croatia</option>
                                                                                    <option value="CU">Cuba</option>
                                                                                    <option value="CW">Curaçao</option>
                                                                                    <option value="CY">Cyprus</option>
                                                                                    <option value="CZ">Czech Republic</option>
                                                                                    <option value="DK">Denmark</option>
                                                                                    <option value="DJ">Djibouti</option>
                                                                                    <option value="DM">Dominica</option>
                                                                                    <option value="DO">Dominican Republic</option>
                                                                                    <option value="EC">Ecuador</option>
                                                                                    <option value="EG">Egypt</option>
                                                                                    <option value="SV">El Salvador</option>
                                                                                    <option value="GQ">Equatorial Guinea</option>
                                                                                    <option value="ER">Eritrea</option>
                                                                                    <option value="EE">Estonia</option>
                                                                                    <option value="ET">Ethiopia</option>
                                                                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                                                                    <option value="FO">Faroe Islands</option>
                                                                                    <option value="FJ">Fiji</option>
                                                                                    <option value="FI">Finland</option>
                                                                                    <option value="FR">France</option>
                                                                                    <option value="GF">French Guiana</option>
                                                                                    <option value="PF">French Polynesia</option>
                                                                                    <option value="TF">French Southern Territories</option>
                                                                                    <option value="GA">Gabon</option>
                                                                                    <option value="GM">Gambia</option>
                                                                                    <option value="GE">Georgia</option>
                                                                                    <option value="DE">Germany</option>
                                                                                    <option value="GH">Ghana</option>
                                                                                    <option value="GI">Gibraltar</option>
                                                                                    <option value="GR">Greece</option>
                                                                                    <option value="GL">Greenland</option>
                                                                                    <option value="GD">Grenada</option>
                                                                                    <option value="GP">Guadeloupe</option>
                                                                                    <option value="GU">Guam</option>
                                                                                    <option value="GT">Guatemala</option>
                                                                                    <option value="GG">Guernsey</option>
                                                                                    <option value="GN">Guinea</option>
                                                                                    <option value="GW">Guinea-Bissau</option>
                                                                                    <option value="GY">Guyana</option>
                                                                                    <option value="HT">Haiti</option>
                                                                                    <option value="HM">Heard Island and McDonald Islands
                                                                                    </option>
                                                                                    <option value="VA">Holy See (Vatican City State)
                                                                                    </option>
                                                                                    <option value="HN">Honduras</option>
                                                                                    <option value="HK">Hong Kong</option>
                                                                                    <option value="HU">Hungary</option>
                                                                                    <option value="IS">Iceland</option>
                                                                                    <option value="IN">India</option>
                                                                                    <option value="ID">Indonesia</option>
                                                                                    <option value="IR">Iran, Islamic Republic of</option>
                                                                                    <option value="IQ">Iraq</option>
                                                                                    <option value="IE">Ireland</option>
                                                                                    <option value="IM">Isle of Man</option>
                                                                                    <option value="IL">Israel</option>
                                                                                    <option value="IT">Italy</option>
                                                                                    <option value="JM">Jamaica</option>
                                                                                    <option value="JP">Japan</option>
                                                                                    <option value="JE">Jersey</option>
                                                                                    <option value="JO">Jordan</option>
                                                                                    <option value="KZ">Kazakhstan</option>
                                                                                    <option value="KE">Kenya</option>
                                                                                    <option value="KI">Kiribati</option>
                                                                                    <option value="KP">Korea, Democratic People's Republic
                                                                                        of</option>
                                                                                    <option value="KR">Korea, Republic of</option>
                                                                                    <option value="KW">Kuwait</option>
                                                                                    <option value="KG">Kyrgyzstan</option>
                                                                                    <option value="LA">Lao People's Democratic Republic
                                                                                    </option>
                                                                                    <option value="LV">Latvia</option>
                                                                                    <option value="LB">Lebanon</option>
                                                                                    <option value="LS">Lesotho</option>
                                                                                    <option value="LR">Liberia</option>
                                                                                    <option value="LY">Libya</option>
                                                                                    <option value="LI">Liechtenstein</option>
                                                                                    <option value="LT">Lithuania</option>
                                                                                    <option value="LU">Luxembourg</option>
                                                                                    <option value="MO">Macao</option>
                                                                                    <option value="MK">Macedonia, the former Yugoslav
                                                                                        Republic of</option>
                                                                                    <option value="MG">Madagascar</option>
                                                                                    <option value="MW">Malawi</option>
                                                                                    <option value="MY">Malaysia</option>
                                                                                    <option value="MV">Maldives</option>
                                                                                    <option value="ML">Mali</option>
                                                                                    <option value="MT">Malta</option>
                                                                                    <option value="MH">Marshall Islands</option>
                                                                                    <option value="MQ">Martinique</option>
                                                                                    <option value="MR">Mauritania</option>
                                                                                    <option value="MU">Mauritius</option>
                                                                                    <option value="YT">Mayotte</option>
                                                                                    <option value="MX">Mexico</option>
                                                                                    <option value="FM">Micronesia, Federated States of
                                                                                    </option>
                                                                                    <option value="MD">Moldova, Republic of</option>
                                                                                    <option value="MC">Monaco</option>
                                                                                    <option value="MN">Mongolia</option>
                                                                                    <option value="ME">Montenegro</option>
                                                                                    <option value="MS">Montserrat</option>
                                                                                    <option value="MA">Morocco</option>
                                                                                    <option value="MZ">Mozambique</option>
                                                                                    <option value="MM">Myanmar</option>
                                                                                    <option value="NA">Namibia</option>
                                                                                    <option value="NR">Nauru</option>
                                                                                    <option value="NP">Nepal</option>
                                                                                    <option value="NL">Netherlands</option>
                                                                                    <option value="NC">New Caledonia</option>
                                                                                    <option value="NZ">New Zealand</option>
                                                                                    <option value="NI">Nicaragua</option>
                                                                                    <option value="NE">Niger</option>
                                                                                    <option value="NG">Nigeria</option>
                                                                                    <option value="NU">Niue</option>
                                                                                    <option value="NF">Norfolk Island</option>
                                                                                    <option value="MP">Northern Mariana Islands</option>
                                                                                    <option value="NO">Norway</option>
                                                                                    <option value="OM">Oman</option>
                                                                                    <option value="PK">Pakistan</option>
                                                                                    <option value="PW">Palau</option>
                                                                                    <option value="PS">Palestinian Territory, Occupied
                                                                                    </option>
                                                                                    <option value="PA">Panama</option>
                                                                                    <option value="PG">Papua New Guinea</option>
                                                                                    <option value="PY">Paraguay</option>
                                                                                    <option value="PE">Peru</option>
                                                                                    <option value="PH">Philippines</option>
                                                                                    <option value="PN">Pitcairn</option>
                                                                                    <option value="PL">Poland</option>
                                                                                    <option value="PT">Portugal</option>
                                                                                    <option value="PR">Puerto Rico</option>
                                                                                    <option value="QA">Qatar</option>
                                                                                    <option value="RE">Réunion</option>
                                                                                    <option value="RO">Romania</option>
                                                                                    <option value="RU">Russian Federation</option>
                                                                                    <option value="RW">Rwanda</option>
                                                                                    <option value="BL">Saint Barthélemy</option>
                                                                                    <option value="SH">Saint Helena, Ascension and Tristan
                                                                                        da Cunha</option>
                                                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                                                    <option value="LC">Saint Lucia</option>
                                                                                    <option value="MF">Saint Martin (French part)</option>
                                                                                    <option value="PM">Saint Pierre and Miquelon</option>
                                                                                    <option value="VC">Saint Vincent and the Grenadines
                                                                                    </option>
                                                                                    <option value="WS">Samoa</option>
                                                                                    <option value="SM">San Marino</option>
                                                                                    <option value="ST">Sao Tome and Principe</option>
                                                                                    <option value="SA">Saudi Arabia</option>
                                                                                    <option value="SN">Senegal</option>
                                                                                    <option value="RS">Serbia</option>
                                                                                    <option value="SC">Seychelles</option>
                                                                                    <option value="SL">Sierra Leone</option>
                                                                                    <option value="SG">Singapore</option>
                                                                                    <option value="SX">Sint Maarten (Dutch part)</option>
                                                                                    <option value="SK">Slovakia</option>
                                                                                    <option value="SI">Slovenia</option>
                                                                                    <option value="SB">Solomon Islands</option>
                                                                                    <option value="SO">Somalia</option>
                                                                                    <option value="ZA">South Africa</option>
                                                                                    <option value="GS">South Georgia and the South Sandwich
                                                                                        Islands</option>
                                                                                    <option value="SS">South Sudan</option>
                                                                                    <option value="ES">Spain</option>
                                                                                    <option value="LK">Sri Lanka</option>
                                                                                    <option value="SD">Sudan</option>
                                                                                    <option value="SR">Suriname</option>
                                                                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                                                                    <option value="SZ">Swaziland</option>
                                                                                    <option value="SE">Sweden</option>
                                                                                    <option value="CH">Switzerland</option>
                                                                                    <option value="SY">Syrian Arab Republic</option>
                                                                                    <option value="TW">Taiwan, Province of China</option>
                                                                                    <option value="TJ">Tajikistan</option>
                                                                                    <option value="TZ">Tanzania, United Republic of</option>
                                                                                    <option value="TH">Thailand</option>
                                                                                    <option value="TL">Timor-Leste</option>
                                                                                    <option value="TG">Togo</option>
                                                                                    <option value="TK">Tokelau</option>
                                                                                    <option value="TO">Tonga</option>
                                                                                    <option value="TT">Trinidad and Tobago</option>
                                                                                    <option value="TN">Tunisia</option>
                                                                                    <option value="TR">Turkey</option>
                                                                                    <option value="TM">Turkmenistan</option>
                                                                                    <option value="TC">Turks and Caicos Islands</option>
                                                                                    <option value="TV">Tuvalu</option>
                                                                                    <option value="UG">Uganda</option>
                                                                                    <option value="UA">Ukraine</option>
                                                                                    <option value="AE">United Arab Emirates</option>
                                                                                    <option value="GB">United Kingdom</option>
                                                                                    <option value="US">United States</option>
                                                                                    <option value="UM">United States Minor Outlying Islands
                                                                                    </option>
                                                                                    <option value="UY">Uruguay</option>
                                                                                    <option value="UZ">Uzbekistan</option>
                                                                                    <option value="VU">Vanuatu</option>
                                                                                    <option value="VE">Venezuela, Bolivarian Republic of
                                                                                    </option>
                                                                                    <option value="VN">Viet Nam</option>
                                                                                    <option value="VG">Virgin Islands, British</option>
                                                                                    <option value="VI">Virgin Islands, U.S.</option>
                                                                                    <option value="WF">Wallis and Futuna</option>
                                                                                    <option value="EH">Western Sahara</option>
                                                                                    <option value="YE">Yemen</option>
                                                                                    <option value="ZM">Zambia</option>
                                                                                    <option value="ZW">Zimbabwe</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <select className="form-control form-control-sm"
                                                                                value={this.state.billingState}
                                                                                onChange={this.handleChangeBillingState}>
                                                                                <option value="null" disabled>Select State</option>
                                                                                <option value="AL">Alabama</option>
                                                                                <option value="AK">Alaska</option>
                                                                                <option value="AZ">Arizona</option>
                                                                                <option value="AR">Arkansas</option>
                                                                                <option value="CA">California</option>
                                                                                <option value="CO">Colorado</option>
                                                                                <option value="CT">Connecticut</option>
                                                                                <option value="DE">Delaware</option>
                                                                                <option value="DC">District Of Columbia</option>
                                                                                <option value="FL">Florida</option>
                                                                                <option value="GA">Georgia</option>
                                                                                <option value="HI">Hawaii</option>
                                                                                <option value="ID">Idaho</option>
                                                                                <option value="IL">Illinois</option>
                                                                                <option value="IN">Indiana</option>
                                                                                <option value="IA">Iowa</option>
                                                                                <option value="KS">Kansas</option>
                                                                                <option value="KY">Kentucky</option>
                                                                                <option value="LA">Louisiana</option>
                                                                                <option value="ME">Maine</option>
                                                                                <option value="MD">Maryland</option>
                                                                                <option value="MA">Massachusetts</option>
                                                                                <option value="MI">Michigan</option>
                                                                                <option value="MN">Minnesota</option>
                                                                                <option value="MS">Mississippi</option>
                                                                                <option value="MO">Missouri</option>
                                                                                <option value="MT">Montana</option>
                                                                                <option value="NE">Nebraska</option>
                                                                                <option value="NV">Nevada</option>
                                                                                <option value="NH">New Hampshire</option>
                                                                                <option value="NJ">New Jersey</option>
                                                                                <option value="NM">New Mexico</option>
                                                                                <option value="NY">New York</option>
                                                                                <option value="NC">North Carolina</option>
                                                                                <option value="ND">North Dakota</option>
                                                                                <option value="OH">Ohio</option>
                                                                                <option value="OK">Oklahoma</option>
                                                                                <option value="OR">Oregon</option>
                                                                                <option value="PA">Pennsylvania</option>
                                                                                <option value="RI">Rhode Island</option>
                                                                                <option value="SC">South Carolina</option>
                                                                                <option value="SD">South Dakota</option>
                                                                                <option value="TN">Tennessee</option>
                                                                                <option value="TX">Texas</option>
                                                                                <option value="UT">Utah</option>
                                                                                <option value="VT">Vermont</option>
                                                                                <option value="VA">Virginia</option>
                                                                                <option value="WA">Washington</option>
                                                                                <option value="WV">West Virginia</option>
                                                                                <option value="WI">Wisconsin</option>
                                                                                <option value="WY">Wyoming</option>
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
                                            <a className="btn btn-add" onClick={()=>this.createNewProfile()}><i className="fa fa-save"></i> Save Profile</a>
                                            <a className="btn btn-all" onClick={()=>this.clearFields()}><i className="fa fa-trash-o"></i> Clear Fields</a>
                                            <a className="btn btn-test" onClick={()=>this.randomCreate()}><i className="fa fa-random"></i> Random Profile</a>
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