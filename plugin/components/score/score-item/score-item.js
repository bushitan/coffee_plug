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

Component({
    /**
     * 组件的属性列表
     */
    properties: {
       
        name:{
            type: String,
            value: "",
        },
        desc: {
            type: String,
            value: "",
        },
        startTime: {
            type: String,
            value: "",
        },
        endTime: {
            type: String,
            value: "",
        },
        discount: {
            type: String,
            value: "",
        },
    }, 
    options: { styleIsolation: 'apply-shared'},
    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        
        click(e){
            this.triggerEvent('click', e.currentTarget.dataset.index)
        },

    }
})
