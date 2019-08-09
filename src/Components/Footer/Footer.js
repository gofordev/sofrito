import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    
    openTwitter = () => {
        window.require('electron').shell.openExternal("https://twitter.com/blasmoji");
    };

    openDiscord = () => {
        window.require('electron').shell.openExternal("https://discord.gg/udTZv9k");
    };


    sendNotification = () => {

        console.log("uh");
       const {notification} = window.require('electron');


       console.log(notification);
   

    };

    render() {
        return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        
                        <p><i className="fa fa-refresh" onClick={()=>this.sendNotification()}></i> Check For Updates <a href="#"><i className="fab fa-twitter" onClick={()=>this.openTwitter()}></i></a> &nbsp; <a href="#"><i className="fab fa-discord"onClick={()=>this.openDiscord()}></i></a> </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
