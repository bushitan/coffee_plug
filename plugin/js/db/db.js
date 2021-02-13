/**
 * Manage体系下，与后端API的util工厂接口。作为API的统一出口
 * 
 * mall v1  小杯子点单系统
 * scan v2  小杯子优惠GO
 * score v3 小杯子集点卡
 * cash v4  小杯子收银系统
 * org v5   小杯子组织机构架构
 * wxshop   微信小商店
 * wxlite   微信开放平台--小程序代开发
 * 
 */


// var Shop = require("shop.js")
var cup_mall = require("cup/v1_mall.js")
var cup_scan = require("cup/v2_scan.js")
var cup_score = require("cup/v3_score.js")
var cup_cash = require("cup/v4_cash.js")
var cup_org = require("cup/v5_org.js")
var wx_shop = require("wx_open/shop.js")
var wx_lite = require("wx_open/lite.js")

class db {
    constructor() { }

    //接口版本
    map = {

        // 小杯子点单系统
        "mall": (appId, userToken) => {
            this.mall = new cup_mall(appId, userToken)
        },
        
        // 小杯子优惠GO
        "scan": (appId, userToken) => {
            this.scan = new cup_scan(appId, userToken)
        },

        // 小杯子集点卡
        "score": (appId, userToken) => {
            this.score = new cup_score(appId, userToken)
        },

        // 小杯子收银系统
        "cash": (appId, userToken) => {
            this.cash = new cup_cash(appId, userToken)
        },

        // 小杯子组织机构架构
        "org": (appId, userToken) => {
            this.org = new cup_org(appId, userToken)
        },

        // 微信小商店
        "wxshop": () => {
            this.wxshop = new wx_shop()
        },

        //微信开放平台--小程序代开发
        "wxlite": () => {
            this.wxlite = new wx_lite()
        },
    }

    /**
     * @method 初始化db接口
     * @param 
     *      version     使用接口版本
     *      appId       调用小程序appId
     *      userToken   小杯子用户凭证
     */
    init(version, appId, userToken ){
        // console.log(this.map.hasOwnProperty(version))

        if (this.map.hasOwnProperty(version) == false){
            console.error("没有找到该版本的DB" , version)
            return 
        }
        this.map[version](appId, userToken)
    }


}

var DB = new db()
module.exports = DB






    // onInit(){
    //     this.wxShop = new wx_shop()
    //     this.shop = new wx_shop()

    //     this.admin = { }
    //     this.admin.org = new Org()
    // }

    // initV5Admin(appId, userToken){
    //     this.v5 = {}
    //     this.v5admin = new Org(appId, userToken)
    // }

// var DB = {
    
// }

// class db {

//     constructor(){
//         this.onInit()
//     }

//     sayHello() {
//         console.log("123")
//     }

//      onInit() {
//         console.log("onInit")

//         // this.wxShop = new wx_shop()
//         // this.shop = new wx_shop()

//         // this.admin = { }
//         // this.admin.org = new Org()
//     }
// }


// var DB = new db()

// module.exports = DB