const events = require("events");
const {
    sleep,
    getRandomInt,
    randomString,
    isStopped
} = require("../utils/tools");

class Bot extends events {

    constructor(derive) {
        super();
        this.id = derive.id;
        this.store = derive.store;
        this.values = {};
        console.log(derive);
    };


    async isStopped2() {






        let stop = global.stopped[this.id];




        return stop;

    };





    async init() {




        global.stopped[this.id] = "Running";

        // return console.log(isStopped(this.id));
        await this.updateStatus("Monitoring.");

        await sleep(750);
        await this.addToCart();

    };


    async updateStatus(status) {

        this.emit("status", {
            id: this.id,
            status: status,
        });

    };


    async updateSuccess(status, obj) {

        if (this.values.successID !== undefined) {

            try {
                global.success.filter(obj => obj.successID === this.values.successID)[0] = this.succcessObj;
            } catch (e) {

            };

        } else {
            this.values.successID = randomString(7);
            global.success.push(this.succcessObj);
        };
    };





    async addToCart() {




        console.log(global.stopped);
        console.log("isStopped - " + isStopped(this.id));
        if (isStopped(this.id)) {

            await this.updateStatus("Stopped");

        } else {


            this.values.image = "https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Lundmark/Images/adidas-Yeezy-Boost-350-V2-Lundmark/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1562948358&w=1000";
            this.values.title = "adidas Yeezy Boost 350 V2 Lundmark (Non Reflective)";
            this.values.price = "$220 USD";
            this.values.profile = "Debit";
            this.values.size = "12";


            this.succcessObj = {
                id: this.values.successID,
                successID: this.values.successID,
                image: this.values.image,
                site: this.store,
                region: "US",
                product: this.values.title,
                status: "1",
                info: {
                    price: this.values.price,
                    profile: this.values.profile,
                    size: this.values.size,
                },
            };



            await this.updateSuccess();

            this.emit("carted", {});

            await this.updateStatus("Added To Cart");

            await this.submitPayment();
        }
    };



    async submitPayment() {


        if (isStopped(this.id)) {


            await this.updateStatus("Stopped")

        } else {
            await sleep(1000);

            this.succcessObj.status = "2";
            await this.updateSuccess();

            await this.updateStatus("Submitting Payment.");

            await this.cardDeclined();

        }
    };


    async cardDeclined() {

        if (isStopped(this.id)) {



            console.log("shit stopped");
            await this.updateStatus("Stopped");

        } else {


            await sleep(2000);
            console.log("shit ran");

            await this.updateStatus("Card Declined.");

            this.succcessObj.status = "5";
            await this.updateSuccess();
        }
    }


};


module.exports = Bot;