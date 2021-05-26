const axios = require('axios');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;


class SipuniApi {

    host = 'http://sipuni.com';
    token;
    userId;

    constructor(token,host='http://sipuni.com') {
        this.host=host;
        if (!token)
            throw 'token not set';
        this.userId=this.getUserIdByToken(token);
        if(!this.userId)
            throw 'invalid token'
        this.token=token;
    }

    async sendNotifyWebphone(shortNum) {
        let res = await axios.post(this.host + '/ext/sendNotifyWebPhoneExtension', {
            userId: this.userId,
            shortNum: shortNum,
            data: {}
        });
        return res.data.success;
    }

    getUserIdByToken(token){
        //todo api call for userId
        return 1;
    }
}

module.exports = SipuniApi;
