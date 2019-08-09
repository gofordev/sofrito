// # Tools
// tool library for bots

// defines that javascript should be executed in "strict mode" (ECMAScript 5)
'use strict';

//import dependecies

module.exports = {
    /**
     * Sleep
     * @param {Number} ms 
     * 
     * @returns timeout
     */
    sleep: (ms) => {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    },
    /**
     * filter your product keywords with the title
     * 
     * @param {String} string 
     * @param {String} keywords 
     * 
     * @returns {Boolean} true or false
     */
    filter: (string, keywords) => {
        if (keywords === undefined || string === undefined) return false;
        else {
            const lowerCasePositive = [];
            const lowerCaseNegative = [];
            const array = keywords.split(",");
            array.forEach(async keyword => {
                if (keyword.startsWith("-")) {
                    lowerCaseNegative.push(keyword.toLowerCase().slice(1).trim());
                } else if (keyword.startsWith("+")) {
                    lowerCasePositive.push(keyword.toLowerCase().slice(1).trim());
                } else if (keyword === "" || keyword === " " || keyword === undefined) {
                    // dont do anything
                } else {
                    lowerCasePositive.push(keyword.toLowerCase().trim());
                };
            });
            const title = string.toLowerCase().replace(/["'™®]/g, "").replace(/[/]/g, " ");
            const stringSplit = title.toLowerCase().split(" ");
            let positiveCheck = lowerCasePositive.every(keyword => title.indexOf(keyword) > -1);
            if (positiveCheck) {
                if (lowerCaseNegative.length === 0) {
                    return true;
                } else {
                    let negativeCheck = lowerCaseNegative.every(keyword => !stringSplit.includes(keyword));
                    if (negativeCheck) {
                        return true;
                    } else return false;
                };
            } else return false;
        };
    },
    /**
     * RANDOM STRING GENERATOR
     *
     * Info:      http://stackoverflow.com/a/27872144/383904
     * Use:       randomString(length [,"A"] [,"N"] );
     * Default:   return a random alpha-numeric string
     * Arguments: If you use the optional "A", "N" flags:
     *            "A" (Alpha flag)   return random a-Z string
     *            "N" (Numeric flag) return random 0-9 string
     */
    randomString: (len, an) => {
        an = an && an.toLowerCase();
        var str = "",
            i = 0,
            min = an == "a" ? 10 : 0,
            max = an == "n" ? 10 : 62;
        for (; i++ < len;) {
            var r = Math.random() * (max - min) + min << 0;
            str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
        }
        return str;
    },

    /**
     * getRandom
     * 
     * @param {Array}
     * 
     * @returns random value from array
     */
    getRandom: (array) => {
        return array[Math.floor(Math.random() * array.length)];
    },

    /**
     * formatProxy
     * 
     * @param {String} Proxy
     * 
     * @returns proxy in node format
     */
    formatProxy: (proxy) => {
        let proxySplit = proxy.split(":");
        if (proxy === undefined || proxy === "" || proxy === " ") {} else if (proxySplit.length > 2) {
            return 'http://' + proxySplit[2] + ':' + proxySplit[3] + '@' + proxySplit[0] + ':' + proxySplit[1];
        } else {
            return 'http://' + proxySplit[0] + ':' + proxySplit[1];
        };
    },

    /**
     * _parseTime
     * 
     * @returns null
     */
    parseTime: (input) => {
        let seconds = (input[0] + (input[1] / 1e9)).toFixed(3);
        return seconds;
    },

    /**
     * parsePrice
     * 
     * @param {Number} pennies
     * 
     * @returns USD value from pennies
     */
    parsePrice: (input) => {
        return [input / 100].toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    },

    getRandomInt: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    isStopped: (id) => {
        let stopped = global.stopped[id] || "Stopping";

        console.log(stopped === "Stopping" || stopped === "Idle" ? true : false);
        return stopped === "Stopping" ||stopped === "Idle" ? true : false;
    }

};