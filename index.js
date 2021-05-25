const axios = require('axios');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;


class SipuniApi {

    host = 'http://10.1.0.34';
    userId;

    constructor(args) {
        if (!args || !args.call_args || !args.call_args.pbx_user_id)
            throw 'user id not set';
        this.userId = args.call_args.pbx_user_id;
    }

    async sendNotifyWebphone(shortNum) {
        let res = await axios.post(this.host + '/ext/sendNotifyWebPhoneExtension', {
            userId: userId,
            shortNum: shortNum,
            data: {}
        });
        return res.data.success;
    }
}

module.exports = SipuniApi;
