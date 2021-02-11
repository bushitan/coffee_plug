

/**
 * 小杯子优惠GO API
 */


var base = require("base.js")


class V2 extends base {
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


module.exports = V2