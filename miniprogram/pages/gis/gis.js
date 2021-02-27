// pages/gis/gis.js
var app = getApp() 
Component({

    /**
     * 页面的初始数据
     */
    data: {
        tabIndex:0,
        tabMatrix : [
            {
                name: "数据",
                // select: "/images/icon/visitor.png",
                // unSelect: "/images/icon/visitor_un.png",
                list: [
                    { name: "用户", id: 11 }, { name: "小区", id: 12 },                 ]
            },
            {
                name: "我的",
                // select: "/images/icon/my2.png",
                // unSelect: "/images/icon/my2.png",
                list: [
                    { name: "待处理", id: 21 }, { name: "已核销", id: 22 }, { name: "已取消", id: 23 },
                ]
            },
            // {
            //     name: "优惠GO",
            //     select: "/images/icon/mall.png",
            //     unSelect: "/images/icon/mall_un.png",
            //     list: [
            //         { name: "已付款", id: 31 },
            //     ]
            // }
        ],

        // list:[
        //     { name:"少儿" , value:80 },
        //     { name:"绘画" , value:76 },
        //     { name:"幼儿园" , value:67 },
        //     { name:"蜡笔画" , value:58 },
        //     { name:"奥特曼" , value:50 },
        //     // { name:"剧场" , value:40 },
        //     // { name:"歌唱" , value:18 },
        //     // { name:"开学" , value:15 },
        //     // { name:"做作业" , value:15 },
        //     // { name:"游戏" , value:10 },
        //     // { name:"老师" , value:8 },
        // ],

        // listSeller:[
        //     { name:"小孩" , value:2 },
        //     { name:"有老人" , value:1 },
        // ],

        list:[
            { name:"少儿" , value:150 },
            { name:"培训班" , value:80 },
            { name:"歌唱" , value:67 },
            { name:"做作业" , value:58 },
            { name:"歌唱" , value:10 },
            // { name:"剧场" , value:40 },
            // { name:"歌唱" , value:18 },
            // { name:"开学" , value:15 },
            // { name:"做作业" , value:15 },
            // { name:"游戏" , value:10 },
            // { name:"老师" , value:8 },
        ],

        listSeller:[
            { name:"幼儿园" , value:30 },
            { name:"小孩" , value:20 },
            { name:"有老人" , value:10 },
        ],

        tagList:["小孩","有老人","小学","初中"],
        showAddTag:false,
    },
    behaviors: [app.behaviors.config, ],

    /**
     * 生命周期函数--监听页面加载
     */
    methods: {

        onLoad(options) {
            this.setData({
                tabbarIndex: options.tabbarIndex || 0,
                tabIndex: options.tabIndex || 0,
            })
            // this.onInit()

            console.log("in temp")
        },
        async onInit(){
            console.log(app.util.today)
            console.log(app.globalData)
            app.globalData.config = await app.lib.init.test()
        },


        clickTabbar(e){
            console.log(e.detail)
            this.setData({tabIndex:e.detail })
        },

        addTag(){
            this.setData({ showAddTag:true, })
        },
    },

   
})