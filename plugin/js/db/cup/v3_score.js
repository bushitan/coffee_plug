

/**
 * 小杯子集点码  API
 */


var base = require("base.js")


class V3 extends base {
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


module.exports = V3