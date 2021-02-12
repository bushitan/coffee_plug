/**
 *  完整样例
    <view class="padding">
        <card-art list="{{carArtList}}"></card-art>
    </view>
    
    数据结构
      [
        {
            id: 0,
            image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
            name: '名称',
            desc: '描述',
            summary: '关键字总结',
            button: '5元抢',
            page:"",
        },
        {
            id: 1,
            image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
            name: '名称',
            desc: '描述',
            summary: '关键字总结',
            button: '5元抢',
            page: "",
        },

    ],
 */
var util = require("/utils/util.js")
Component({
    /**
     * 组件的属性列表
     */
    properties: {

        // 查询时间范围
        // start
        startTime: {
            type: String,
            value: util.today
        },

        endTime: {
            type: String,
            value: util.today
        },


        limit: {
            type: Number,
            value: 31
        },

        StatusBar: {
            type: Number,
            value:0
        }, 
        
        CustomBar: {
            type: Number,
            value:0
        }, 
        // summary:{
        //     type:String,
        //     value:""
        // },
        // isShadow: {
        //     type: Boolean,
        //     value: false
        // },
     
    },
    // ready(){
        //  wx.getSystemInfo({
        //     success: e => {
        //         var StatusBar, Custom, CustomBar
        //         StatusBar = e.statusBarHeight;
        //         let capsule = wx.getMenuButtonBoundingClientRect();
        //         if (capsule) {
        //             Custom = capsule;
        //             CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        //         } else {
        //             CustomBar = e.statusBarHeight + 50;
        //         }

        //         this.setData({
        //             StatusBar: StatusBar,
        //             Custom: Custom,
        //             CustomBar: CustomBar,
        //         })
        //     }
        // })
    // },
    // behaviors: [app.behaviors.config],
    options: { styleIsolation: 'apply-shared'},
    /**
     * 组件的初始数据
     */
    data: {
        bgImage:"",
        showDialog: false,
        starttoday: util.today,
        endtoday: util.today,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        
        // click(e){
        //     this.triggerEvent('click')

        // },

        clickDate() {
            // debugger
            this.setData({
                showDialog: true
            })

        },

        // 点击查询按钮
        dialogConfirm(e) {
            
            // console.log(e.detail.value)
            // var start, end
            // var start = util.getDayFirstTime(e.detail.value.startDate)
            // var end = util.getDayLastTime(e.detail.value.endDate)

            var start = util.getDayFirstTime(this.data.starttoday)
            var end = util.getDayLastTime(this.data.endtoday)


            if (util.getDateRange(start, end) > this.data.limit) {
                wx.showModal({ title: '查询范围不能大于' + this.data.limit + '天', showCancel: false, })
                return
            }

            this.setData({ showDialog: false, })
            this.triggerEvent('choiseDate', {
                startTime: start, endTime: end
            })

        },

        startDateEvent(e) { this.setData({ starttoday: e.detail.value }) },
        endDateEvent(e) { this.setData({ endtoday: e.detail.value }) },
    }
})
