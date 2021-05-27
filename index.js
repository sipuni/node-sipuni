const axios = require('axios');

class SipuniApi {

    host = 'https://sipuni.com';
    token;

    constructor({token, host}) {
        if (host)
            this.host = host;
        if (!token)
            throw 'token not set';
        this.token = token;
    }

    async sendNotifyWebphone(shortNum) {
        let res = await axios.post(this.host + '/ext/sendNotifyWebPhoneExtension', {
            token: this.token,
            shortNum: shortNum,
        }, {headers: {}});
        return !!res.data.success;
    }
}

module.exports = SipuniApi;
