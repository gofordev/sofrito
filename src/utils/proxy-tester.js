const request = require("request-promise");


class ProxyTester {
    constructor(derive) {
        // this.proxy = derive.proxy;
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
            await this.getLocation();
        } else {
            this.ipAddress = proxySplit[0];
            this.formattedProxy = 'http://' + proxySplit[0] + ':' + proxySplit[1];
            await this.getLocation();
        };
    };

    async getLocation() {
        let options = {
            uri: 'https://ipapi.co/json/' + this.ipAddress,
            method: 'GET',
            simple: false,
            time: true,
            json: true,
            gzip: true,
            resolveWithFullResponse: true,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
            },
        };

        try {
            let response = await request(options);

            if (response.body.status === "success") {
                console.log("Location: " + response.body.city + ", " + response.body.countryCode);
                await this.testProxy();
            }
            else {
                console.log("Location: N/A");
                await this.testProxy();
            };
        } catch (e) {
            console.log(e)
            if(!doesExist(this.proxy.id)) return
            updateStatus(this.proxy.id, "BANNED")
            // this.win.webContents.send("proxy::update1", {
            //     id: this.proxy.id,
            //     status: "BANNED"
            // })
        }
        


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

            let response = await request(options);

            if (response.statusCode === 200) {
                console.log('Valid ' + Math.floor(response.timingPhases.firstByte) + ' ms');
                if(!doesExist(this.proxy.id)) return
                updateStatus(this.proxy.id, Math.floor(response.timingPhases.firstByte) + ' ms')
                // this.win.webContents.send("proxy::update1", {
                //     id: this.proxy.id,
                //     status: Math.floor(response.timingPhases.firstByte) + ' ms'
                // })
            }
            else {
                console.log('BANNED ' + response.statusCode)
                if(!doesExist(this.proxy.id)) return
                updateStatus(this.proxy.id, 'BANNED ' + response.statusCode)
                // this.win.webContents.send("proxy::update1", {
                //     id: this.proxy.id,
                //     status: 'BANNED ' + response.statusCode
                // })
            }
            
        } catch (e) {
            console.log("Proxy Error");
            if(!doesExist(this.proxy.id)) return
            updateStatus(this.proxy.id, "BANNED")
            // this.win.webContents.send("proxy::update1", {
            //     id: this.proxy.id,
            //     status: 'BANNED'
            // })  
        };
    };


};

module.exports = ProxyTester;


function updateStatus(id, status) {
    console.log("updating proxy status")
    if(document.getElementById(id+"_proxy_status")){
        document.getElementById(id+"_proxy_status").innerHTML = status
        updateProxy(id, status)
    }
}

function updateProxy(id, status){
    let proxies = JSON.parse(localStorage.getItem("proxies"))
    if(proxies){
        let index = proxies.findIndex((obj=> obj.id == id))
        proxies[index]["status"] = status
        localStorage.setItem("proxies", JSON.stringify(proxies))
    }
}

function doesExist(id){
    let proxies = JSON.parse(localStorage.getItem("proxies"))
    if(proxies){
        let index = proxies.findIndex((obj=> obj.id == id))
        if(index>=0) return true;
        return false
    }
    return false
}