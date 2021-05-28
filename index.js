const axios = require('axios');

class SipuniApi {

    host = 'https://sipuni.com';
    token;

    constructor({token, host}) {
        if (host)
            this.host = host;
        if (!token)
            throw new Error('token not set');
        this.token = token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    async sendNotifyWebphoneSimple(shortNum, cardTitle, urlTitle, url) {
        return this.sendNotifyWebphone(shortNum, {
            "title": cardTitle,
            "links": [
                {
                    "title": urlTitle,
                    "url": url
                }
            ]
        });
    }

    async sendNotifyWebphone(shortNum, notifyData) {
        let res = await axios.post(this.host + '/ext/sendNotifyWebPhoneFaas', {
            shortNum: shortNum,
            data: notifyData
        });
        return !!res.data.success;
    }
}

module.exports = SipuniApi;
