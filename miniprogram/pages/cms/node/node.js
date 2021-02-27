// pages_manager/seller/seller.js
var app = getApp() 
Component({

    properties: {
    },
    data: {
        node:{},

    },
    behaviors: [app.behaviors.cms,],

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
            console.log(options)

            this.setData({
                node:this.data.userList[0],
                rule: this.data.userRule,
            })
        },
        async onInit() {

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


        // 预览单张图片
        previewImage(e){
            console.log(e)
            wx.previewImage({
                urls: [e.currentTarget.dataset.src],
            })
        },

        addArrayNode(e){
            //TODO 增加标签，通过弹窗
            var key = e.currentTarget.dataset.key
            var tabIndex = e.currentTarget.dataset.tabindex
            var fieldIndex = e.currentTarget.dataset.fieldindex
            var index = e.currentTarget.dataset.index
        },
        deletArrayNode(e) {
            var key = e.currentTarget.dataset.key
            var tabIndex = e.currentTarget.dataset.tabindex
            var fieldIndex = e.currentTarget.dataset.fieldindex
            var index = e.currentTarget.dataset.index
            console.log(tabIndex, fieldIndex, index)
            console.log(this.data.node[key])
            
            wx.showModal({
                title: '是否删除',
                success :res=>{
                    if(res.confirm){ 
                        var node = this.data.node
                        node[key].splice(index, 1)
                        this.setData({
                            node: node
                        })
                    }
                }
            })

        },


        //  选择外键
        selectForeign(e) {
            var model = e.currentTarget.dataset.model
            var key = e.currentTarget.dataset.key
            var descKey = e.currentTarget.dataset.desckey
            
            // console.log(dataset)
            wx.navigateTo({
                url: '/pages/cms/foreign/foreign?model=' + model + "&key=" + key + "&descKey=" + descKey,
            })
        },

        // M2M 多对多 
        selectM2M(e) {
            var model = e.currentTarget.dataset.model
            var key = e.currentTarget.dataset.key
            var descKey = e.currentTarget.dataset.desckey

            // console.log(dataset)
            wx.navigateTo({
                url: '/pages/cms/m2m/m2m?model=' + model + "&key=" + key  
            })
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