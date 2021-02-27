// pages_manager/seller/seller.js
var app = getApp()
Component({

    properties: {
    },
    data: {
        list: [
        ],
        model: ""
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
            this.setData({
                model: options.model,
                key: options.key,
                descKey: options.descKey,
            })
            this.onInit()
        },
        async onInit() {
            /**
             * 多对多是比较弹性的，可以单次设置即可生效
             * 多对多的排序，暂不考虑，以对象本身的排序标准为准。 
             * 
             * 需要增加一个rel  model 的请求配置页面
             * 1、已经获取了rel model 根据 rel model
             * 2、根据关系表， 查询已经选择的， 未选择的2个数组
             * 3、选择和删除，直接操作关系表数据库，并更新上一页数据
             * 4、返回
             */

            if (this.data.model == "shop")
                this.setData({
                    list: this.data.shopList,
                    rule: this.data.shopRule,
                })
        },


        // 选择外键的元素 
        select(e) {

            console.log("编辑", e.currentTarget.dataset.index)
            var index = e.currentTarget.dataset.index
            var list = this.data.list
            var foreignNode = list[index]

            var prePage = getCurrentPages()[getCurrentPages().length - 2]
            console.log(prePage)
            var node = prePage.data.node
            node[this.data.key] = foreignNode[this.data.rule.nodeIndexKey] // 如果约定了_id 则主键都不用配置
            node[this.data.descKey] = foreignNode.name // 固定使用name

            prePage.setData({
                node: node
            })

            wx.navigateBack({

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