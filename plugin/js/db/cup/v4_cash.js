
/**
 * 小杯子收银系统 API
 */

var base = require("base.js")


class V4 extends base {
    constructor(appId, userToken) {
        super(appId, userToken)
    }

    /**
     *  
     */
    test(data) {
        return new Promise((reslove, reject) => {

            this.base({ url: "", data: data }).then(res => { wx.hideLoading(); reslove(res) }).catch(res => reject(res))

        })
    }
}


module.exports = V4