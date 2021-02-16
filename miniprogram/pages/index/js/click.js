 
module.exports = Behavior({
    data: { 
    },

 

    //准备完成
    ready() { 
        wx.navigateTo({
            // url: 'plugin://liteCupPlugin/productMenu',  // temp 页面
            url: 'plugin://liteCupPlugin/productDetail',  // temp 页面
            // url: 'plugin://liteCupPlugin/temp',  // temp 页面
            // url : "plugin://liteCupPlugin/hello-page"
        })
    },
    methods: {
        menuToPay() { console.log("to Pay") },
        menuOpenCart() { this.setData({ cartShow: true }) },


        clickItem() { console.log("clickItem") },

        nav(){
            wx.navigateTo({
                // url: 'plugin://liteCupPlugin/productMenu',  // temp 页面
                url: 'plugin://liteCupPlugin/productDetail',  // temp 页面
                // url: 'plugin://liteCupPlugin/temp',  // temp 页面
                // url : "plugin://liteCupPlugin/hello-page"
            })
        },

        // onLoad: function (options) {
        //    // 页面创建时执行 组件内不触发
        //     console.log("onLoad")
        // },
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
    },


    // created() {
    //     console.log("created")
    // },
    // attached() {

    // },
    // detached() {
    //     console.log("detached")
    // },
    // moved() {
    //     console.log("moved")
    // },


    // // 可以不用
    // pageLifetimes: {
    //     // 组件所在页面的生命周期函数
    //     show: function () { console.log("show") },
    //     hide: function () { console.log("hide") },
    //     resize: function () { console.log("resize") },
    // },

    // // 可以不用
    // lifetimes: {
    //     // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    //     attached: function () { },
    //     moved: function () { },
    //     detached: function () { },
    // },
})