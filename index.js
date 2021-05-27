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
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }

    async sendNotifyWebphone(shortNum) {
        let res = await axios.post(this.host + '/ext/sendNotifyWebPhoneExtension', {
            shortNum: shortNum,
        });
        return !!res.data.success;
    }
}

module.exports = SipuniApi;
