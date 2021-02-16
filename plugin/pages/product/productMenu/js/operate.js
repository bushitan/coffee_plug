
var ProductData = require("../../../../data/product.js")
module.exports = Behavior({
    data: {

        swiperList: [],
        storeList:[],//门店列表

        ProductData: [], // 菜单数据
        categoryIndex: 0,  //当前目录
        productIndex: 3, //当前产品
        selectMap: {
            "0_0_0_0_": 1,
            "0_3_0_1_1_0_": 1,
            "0_3_0_0_1_0_": 1,
            "0_3_0_0_1_1_": 2,
            "0_3_0_2_1_1_": 3
        }, // 购物车数量对象

        cartList:{}, // 购物车        
        showProduct:false,
        showCart:false,
    },



    //准备完成
    ready() {
        this.onInitMenu()
        // wx.navigateTo({
        //     url: 'plugin://liteCupPlugin/productMenu',  // temp 页面
        //     // url: 'plugin://liteCupPlugin/temp',  // temp 页面
        //     // url : "plugin://liteCupPlugin/hello-page"
        // })

        // this.changeCart()
    },
    methods: {
        menuToPay() { console.log("to Pay") },
        menuOpenCart() { this.setData({ cartShow: true }) },

        // clickItem() { console.log("clickItem") },


        // 初始化
        onInitMenu() {
            var res = this.getSwiper()
            this.setData({ swiperList: res })
            var res = this.getProductList()
            this.setData({ ProductData: res })
            var res = this.getShopList()

            // TODO 获取购物车数据
            this.changeCart() // 更新购物车
        },

        // 轮播图 
        getSwiper(){
            return  [
                {
                    id: 0,
                    type: 'image',
                    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
                    page: "/pages/test/test"

                }, {
                    id: 1,
                    type: 'image',
                    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
                    page: ""
                }
            ]
            
        },
        // 产品列表
        getProductList(){
            return ProductData
        }, 

        // 切换门店
        getShopList() {
            // console.log("selectShop")
            //TODO 重新加载menu，提示清空购物车
        },


        // 切换门店
        selectShop() { 
            console.log("selectShop")
            //TODO 重新加载menu，提示清空购物车
        },

        // 去结算
        toPay() { },














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