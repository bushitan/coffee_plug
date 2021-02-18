/**
 

    模型
    <coupon-list list="{{couponList}}"></coupon-list>

    数据
    
 */

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        orderId: { type: String},
        status:{ type:String },
        statusCode:{ type:Number },
        order:{ type:Array },
        count:{ type:Number },
        price:{ type:Number },
        createTime:{ type:String },
    }, 
    options: { styleIsolation: 'apply-shared'},
    /**
     * 组件的初始数据
     */
    data: {

    },

    ready(){
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
