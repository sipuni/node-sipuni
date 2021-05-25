const axios = require('axios');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;


class SipuniApi {

    host = 'http://10.1.0.34';

    constructor() {

    }

    async sendNotifyWebphone(userId, shortNum) {
        let res = await axios.post(this.host + '/ext/sendNotifyWebPhoneExtension', {
            userId: userId,
            shortNum: shortNum,
            data: {}
        });
        console.log(process.argv);
        return res.data.success;

    }
}

module.exports = SipuniApi;
