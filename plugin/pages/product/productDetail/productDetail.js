// pages_manager/seller/seller.js
// var app = getApp() 
Component({

    properties: {
    },
    data: { 
        list: [
        ],
        cartList: [
            {
                "key": "0_0_0_0_",
                "categoryIndex": "0",
                "productIndex": "0",
                "ProductId": 143,
                "Quantity": 1,
                "skuDesc": "",
                "cover": "https://wm.51zfgx.com/images/thumbs/0000193_8-oz.jpeg",
                "name": "澳白（8 OZ）",
                "price": 25
            },
            {
                "key": "0_3_0_1_1_0_",
                "categoryIndex": "0",
                "productIndex": "3",
                "ProductId": 174,
                "Quantity": 1,
                "skuDesc": "规格【大杯】，甜度【正常】",
                "cover": "https://wm.51zfgx.com/images/thumbs/0001251_-12-oz.jpeg",
                "name": "热 伊丽莎白 招牌特调（12 OZ）",
                "price": 32
            },
            {
                "key": "0_3_0_0_1_0_",
                "categoryIndex": "0",
                "productIndex": "3",
                "ProductId": 174,
                "Quantity": 1,
                "skuDesc": "规格【中杯】，甜度【正常】",
                "cover": "https://wm.51zfgx.com/images/thumbs/0001251_-12-oz.jpeg",
                "name": "热 伊丽莎白 招牌特调（12 OZ）",
                "price": 30
            },
            {
                "key": "0_3_0_0_1_1_",
                "categoryIndex": "0",
                "productIndex": "3",
                "ProductId": 174,
                "Quantity": 2,
                "skuDesc": "规格【中杯】，甜度【半糖】",
                "cover": "https://wm.51zfgx.com/images/thumbs/0001251_-12-oz.jpeg",
                "name": "热 伊丽莎白 招牌特调（12 OZ）",
                "price": 31
            },
            {
                "key": "0_3_0_2_1_1_",
                "categoryIndex": "0",
                "productIndex": "3",
                "ProductId": 174,
                "Quantity": 3,
                "skuDesc": "甜度【半糖】",
                "cover": "https://wm.51zfgx.com/images/thumbs/0001251_-12-oz.jpeg",
                "name": "热 伊丽莎白 招牌特调（12 OZ）",
                "price": 31
            }
        ],
    },
    // behaviors: [app.behaviors.config, ],

    attached() {
        console.log("in temp")

        // wx.navigateTo({
        //     // url: 'plugin://liteCupPlugin/temp',
        //     // url: "plugin://liteCupPlugin/hello-page",
        //     url: "/pages/test/test",
        //     fail(res){
        //         console.log(res)
        //     }
        // })


        // console.log(getCurrentPages())
        // wx.redirectTo({
        //     url: "/pages/test/test",
        // })
    },
    pageLifetimes: {
        show() {
            console.log("show temp")

        },
    },
    methods: {

        onLoad(options) {
            this.setData({
                tabbarIndex: options.tabbarIndex || 0,
                tabIndex: options.tabIndex || 0,
            })
            this.onInit()

            console.log("in temp")
        },
        async onInit(){
           
        },

        onSuccess: function (res) {
            console.log(res.detail);
        },
        onFail: function (res) {
            console.log(res);
        }










        // 基础的分享页面功能
        // onShareAppMessage(res) {
        //     res = res || {}
        //     if (res.from === 'button') {
        //         // 来自页面内转发按钮
        //         console.log(res.target)
        //     }
        //     return {
        //         title: res.title || '欢迎进入分享集点卡商户端',
        //         path: res.path || '/pages/route/route',
        //         imageUrl: res.imageUrl || "../../images/icon_share_base_cup.png",

        //     }
        // },


        // /**
        //  * 用户点击右上角分享
        //  */
        // onShareAppMessage: function () {
        //     debugger
        // },

        // // onLoad: function (options) {
        // //     // 页面创建时执行
        // //     console.log("onLoad")
        // // },
        // onShow: function () {
        //     // 页面出现在前台时执行
        //     console.log(" onShow")
        // },
        // onReady: function () {
        //     // 页面首次渲染完毕时执行
        //     console.log(" onReady")
        // },
        // onHide: function () {
        //     // 页面从前台变为后台时执行
        //     console.log("onHide ")
        // },
        // onUnload: function () {
        //     // 页面销毁时执行
        //     console.log("onUnload ")
        // },
        // onPullDownRefresh: function () {
        //     // 触发下拉刷新时执行
        //     console.log(" onPullDownRefresh")
        // },
        // onReachBottom: function () {
        //     // 页面触底时执行
        //     console.log("onReachBottom ")
        // },
        // onShareAppMessage: function () {
        //     // 页面被用户分享时执行
        //     console.log(" onShareAppMessage")
        // },
        // onPageScroll: function () {
        //     // 页面滚动时执行
        //     console.log(" onPageScroll")
        // },
        // onResize: function () {
        //     // 页面尺寸变化时执行
        //     console.log(" onResize")
        // },
    }
})