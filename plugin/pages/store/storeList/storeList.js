// pages_manager/seller/seller.js
// var app = getApp() 
Component({

    properties: {
    },
    data: { 
        list: [
            {
                name:"Seeking鲤湾店",
                address:"南宁市青秀区鲤湾路56号",
                status: "休息中",
                startTime: "07:30",
                endTime: "21:45",
                phone:"12543829",
            },
            {
                name: "Seeking金源店",
                address: "南宁市金源CBD",
                status: "休息中",
                startTime: "07:30",
                endTime: "21:45",
                phone:"12543829",
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
        },





        getPhone(e){
            console.log(e.detail)
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