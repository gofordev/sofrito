import React, {
    Component
} from 'react';


export default class Success extends Component {
    constructor(props) {
        super(props)

        console.log(global.success)
        this.state = {
            successObj: global.success
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                successObj: global.success,
            });
        }, 1000);
    }

    statusRender = (status) => {
      //  console.log("status", status)
        switch(status) {
            case "1": 
                return (
                    <div className="progress-steps">
                        <div className="single-step bg-info">
                            <i className="fa fa-search"></i>
                        </div>
                        <span></span>
                        <div className="single-step">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <span></span>
                        <div className="single-step">
                            <i className="fa fa-spinner"></i>
                        </div>
                        <span></span>
                        <div className="single-step ">
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                )
            case "2": 
                return (
                    <div className="progress-steps">
                        <div className="single-step bg-info">
                            <i className="fa fa-search"></i>
                        </div>
                        <span className="bg-info"></span>
                        <div className="single-step bg-info">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <span></span>
                        <div className="single-step">
                            <i className="fa fa-spinner"></i>
                        </div>
                        <span></span>
                        <div className="single-step">
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                )
            case "3": 
                return (
                    <div className="progress-steps">
                        <div className="single-step bg-warning">
                            <i className="fa fa-search"></i>
                        </div>
                        <span className="bg-warning"></span>
                        <div className="single-step bg-warning">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <span className="bg-warning"></span>
                        <div className="single-step bg-warning">
                            <i className="fa fa-spinner"></i>
                        </div>
                        <span></span>
                        <div className="single-step">
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                )
            case "4": 
                return (
                    <div className="progress-steps">
                        <div className="single-step bg-success">
                            <i className="fa fa-search"></i>
                        </div>
                        <span className="bg-success"></span>
                        <div className="single-step bg-success">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <span className="bg-success"></span>
                        <div className="single-step bg-success">
                            <i className="fa fa-spinner"></i>
                        </div>
                        <span className="bg-success"></span>
                        <div className="single-step bg-success">
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                )
            case "5": 
                return (
                    <div className="progress-steps">
                        <div className="single-step bg-danger">
                            <i className="fa fa-search"></i>
                        </div>
                        <span className="bg-danger"></span>
                        <div className="single-step bg-danger">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <span className="bg-danger"></span>
                        <div className="single-step bg-danger">
                            <i className="fa fa-spinner"></i>
                        </div>
                        <span className="bg-danger"></span>
                        <div className="single-step bg-danger ">
                            <i className="fa fa-times"></i>
                        </div>
                    </div>
                )
            default: return
                
        }
    }

    deleteProgress = (index) => {
        this.state.successObj.splice(index, 1)
        this.setState({
            successObj: this.state.successObj
        })
    }

    render() {
        return(
            <div className="success">
                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="success card">
                        <div className="card-body">
                            <div className="proxies success-table custom-scroll">
                                <table className="table table-recover">
                                    <thead>
                                        <tr>
                                            <th>Site</th>
                                            <th>Image</th>
                                            <th>Product</th>
                                            <th>Progress</th>
                                            <th>Info</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.successObj ? this.state.successObj.map((successObj, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="company-name">Adidas<br />
                                                            <span className="location">US Region</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img src={successObj.image} alt=""/>
                                                    </td>
                                                    <td>{successObj.product}</td>
                                                    <td>
                                                        {this.statusRender(successObj.status)}
                                                    </td>
                                                    <td>
                                                        Price - {successObj.info.price}<br />
                                                        Profile - {successObj.info.profile}<br />
                                                        Size - {successObj.info.size}
                                                    </td>
                                                    <td>
                                                        <a href="#" className="btn-action" onClick={()=>this.deleteProgress(index)}><i className="fa fa-trash-o"></i></a>
                                                    </td>
                                                </tr>
                                            )
                                        }) : <tr></tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        );
    }
}