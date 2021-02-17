/**
 

    模型
    <coupon-list list="{{couponList}}"></coupon-list>

    数据
    couponList:[
        {
            id: 0,
            name: '周边商品8.8折',
            desc: '5元优惠券满50.00元使用',
            startTime: '2019.1.6',
            endTime: '2019.2.1',
            discount:"8.8折",
            page: "",
        },

        {
            id: 0,
            name: '周边商品8.8折',
            desc: '5元优惠券满50.00元使用',
            startTime: '2019.1.6',
            endTime: '2019.2.1',
            discount: "8.8折",
            page: "",
        },

]
 */

var util = require("/utils/util.js")
Component({
    /**
     * 组件的属性列表
     */
    properties: {


        title: { type: String ,value:"请选择"},

        show: { type: Boolean,value:false, },
       
        name: { type: String },
        address: { type: String },
        status: { type: String },
        startTime: { type: String },
        endTime: { type: String },
        phone: { type: String },
        longitude: { type: Number },
        latitude: { type: Number },
    }, 
    options: { styleIsolation: 'apply-shared'},
    /**
     * 组件的初始数据
     */
    data: {

        starttoday: util.today,
        endtoday: util.today,

        today:util.today,
        currentYear: util.currentYear,
        currentMonth: util.currentMonth,
        currentMinute: util.currentMinute,
    },

    ready(){
    },
    /**
     * 组件的方法列表
     */
    methods: {

        confirm(e) {
            console.log(e)
            this.setData({ show:false})
            this.triggerEvent('confirm', this.data.currentMinute)
        },
        cancel(e) {
            this.setData({ show: false })
            this.triggerEvent('cancel', e.currentTarget.dataset.index)
        },

    }
})
