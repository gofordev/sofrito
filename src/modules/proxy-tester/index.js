const request = require("request-promise");
const events = require("events");

class ProxyTester extends events{
    constructor(derive) {
        super();
        this.proxy = derive;
    };

    async init() {
        // let proxySplit = this.proxy.split(":");
        
        let proxySplit = [];
        proxySplit[0] = this.proxy.ip
        proxySplit[1] = this.proxy.port
        proxySplit[2] = this.proxy.username
        proxySplit[3] = this.proxy.password

        if (proxySplit.length > 2) {
            this.ipAddress = proxySplit[0];
            this.formattedProxy = 'http://' + proxySplit[2] + ':' + proxySplit[3] + '@' + proxySplit[0] + ':' + proxySplit[1];
            await this.testProxy();
        } else {
            this.ipAddress = proxySplit[0];
            this.formattedProxy = 'http://' + proxySplit[0] + ':' + proxySplit[1];
            await this.testProxy();
        };
    };



    async testProxy() {
        let options = {
            uri: 'https://kith.com/collections/all.json',
            method: 'GET',
            simple: false,
            time: true,
            json: true,
            gzip: true,
            proxy: this.formattedProxy,
            resolveWithFullResponse: true,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
            },
        };


        try {

            console.log(options);
            let response = await request(options);

            if (response.statusCode === 200) {

                this.emit("status", {
                    status: "valid",
                    speed: Math.floor(response.timingPhases.firstByte) + ' ms',
                })
                console.log('Valid ' + Math.floor(response.timingPhases.firstByte) + ' ms');
            }
            else {
                this.emit("status", {
                    status: "banned",
                    speed: Math.floor(response.timingPhases.firstByte) + ' ms',
                })
            }
            
        } catch (e) {
            this.emit("status", {
                status: "error",
                speed: "timeout",
            })
        };
    };


};

module.exports = ProxyTester;

