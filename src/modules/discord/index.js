const request = require('request-promise').defaults({
  simple: false,
  gzip: true,
  json: true,
  resolveWithFullResponse: true,
});
class Discord {
  constructor(derive) {
    this.url = derive.url;
  };
  async sendWebhook() {
    let options = {
      uri: this.url,
      method: "POST",
      body: {
        username: "Blasmoji AIO",
        avatar_url: "https://images-ext-1.discordapp.net/external/zuhB_jW3My0EOhq28LZo2HWBUuU2kxKnu3EX7LRpO9c/%3Fsize%3D128/https/cdn.discordapp.com/icons/608721576094990339/bf10a773a470def4c24d611b43bcb52e.png",
        content: "",
        embeds: [{
          title: `Blasmoji AIO Test Notification`,
          url: "https://blasmoji.com/",
          color: "000000",
          footer: {
            icon_url: "https://images-ext-1.discordapp.net/external/zuhB_jW3My0EOhq28LZo2HWBUuU2kxKnu3EX7LRpO9c/%3Fsize%3D128/https/cdn.discordapp.com/icons/608721576094990339/bf10a773a470def4c24d611b43bcb52e.png",
            text: "Blasmoji AIO"
          },
          thumbnail: {
            url: "https://sneakernews.com/wp-content/uploads/2019/05/adidas-yeezy-350-v2-black-fu9006-1.jpg"
          },
          author: {
            name: "Blasmoji AIO",
            url: "https://blasmoji.com/",
            icon_url: "https://images-ext-1.discordapp.net/external/zuhB_jW3My0EOhq28LZo2HWBUuU2kxKnu3EX7LRpO9c/%3Fsize%3D128/https/cdn.discordapp.com/icons/608721576094990339/bf10a773a470def4c24d611b43bcb52e.png"
          },
          fields: [{
              "name": "Product",
              "value": "Yeezy Black 350 Reflective",
           //   "inline": false,
            },
            {
              "name": "Size",
              "value": "8",
              "inline": true
            },
            {
              "name": "Profile",
              "value": "Test",
              "inline": true
            },
            {
              "name": "Email",
              "value": "testing@blasmoji.com",
              "inline": true
            },
            {
              "name": "Order #",
              "value": "123456",
              "inline": true

            //  "inline": true
            }]
        }],
      }

    };
    try {
      let response = await request(options);

      console.log(response.body);
    } catch (e) {
      console.log(e);
    };
  };

};
module.exports = Discord;