// pages_manager/seller/seller.js
// var app = getApp() 
var ProductData = require("../../../data/product.js")
var CurrentItem = require("../../../data/currentItem.js")
var MenuCartData = require("../../../data/menu-cart.js")
var Operate = require("js/operate.js")
var SKU = require("js/sku.js")
var Cart = require("js/cart.js")
Component({

    properties: {
    },
    data: { 

        // swiperList: [
        //     {
        //         id: 0,
        //         type: 'image',
        //         url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
        //         page: "/pages/test/test"

        //     }, {
        //         id: 1,
        //         type: 'image',
        //         url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
        //         page: ""
        //     }
        // ],

        // list: [
        // ],
        // ProductData: ProductData,
        // CurrentItem: CurrentItem,
        // MenuCartData: MenuCartData,
        // productCart:{},
    },
    behaviors: [Operate, SKU, Cart] ,  

    attached() {

        console.log("attached temp")

        // plugin - private://wxidxxxxxxxxxxxxxx/
        // wx.navigateTo({
        //     url: 'plugin-private://wxd19bbe9cb3b293b6/pages/hello-page"',
            
        // })
    },
    pageLifetimes: {
        show() {
            console.log("show temp")
        },
    },
    methods: {

        onLoad(options) {
            // this.setData({
            //     tabbarIndex: options.tabbarIndex || 0,
            //     tabIndex: options.tabIndex || 0,
            // })
            // this.onInit()

            console.log("onLoad temp")
        },
        async onInit(){
           
        },

    










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