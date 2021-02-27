// pages_manager/seller/seller.js
var app = getApp() 
Component({

    properties: {
    },
    data: {
        list: [ 
        ],

    },
    behaviors: [app.behaviors.cms, ],

    // attached() {
    //     console.log("in temp")
 
    // },
    pageLifetimes: {
        show() {
            console.log("show temp")

        },
    },
    methods: {

        onLoad(options) { 
            this.onInit()
        },
        async onInit() {

            // 初始化配置
            this.setData({
                list: this.data.userList,
                rule: this.data.userRule,
                // displayList: this.data.userDispalyList,                
            })
        },

        onSuccess: function (res) {
            console.log(res.detail);
        },
        onFail: function (res) {
            console.log(res);
        },





        getPhone(e) {
            console.log(e.detail)
        },


        editor(e) {
            console.log("编辑", e.currentTarget.dataset.index)
            var index = e.currentTarget.dataset.index
            var rule = this.data.rule
            var list = this.data.list
            var nodeIndexKey = rule.nodeIndexKey

            var param = rule.nodeIndexKey + "=" + list[index][nodeIndexKey]
            wx.navigateTo({
                url: '/pages/cms/node/node?' + param ,
            })
        },


        del(e) {
            console.log("删除", e.currentTarget.dataset.index)
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