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
        order: { type: Object },
        show: { type: Boolean, value: true }, //是否展示
        name: { type: String, value: "Seeking 鲤湾路" }, // 是否镜像
    }, 
    options: { styleIsolation: 'apply-shared'},
    /**
     * 组件的初始数据
     */
    data: {
        total : 0 ,
        quantity : 0
    },

    // 监听器
    observers: {
        // 监测购物车数据，同步到已选数量
        'order': function (order) {
            var temp = {}
            
            var total = 0, quantity = 0
            for (var key in order) {
                // var i = key.split("_")[0]
                // var j = key.split("_")[1]
                // var newKey = i + "_" + j
                // temp[newKey] = temp[newKey] || 0 //防止数量为0
                // temp[newKey] = temp[newKey] + order[key].Quantity

                
                total += order[key].price
                quantity += order[key].Quantity
            }
            this.setData({
                total: total,
                quantity: quantity
            })
        }
    },
    ready(){
    },
    /**
     * 组件的方法列表
     */
    methods: {

        // /**
        //  * @method 清空
        //  */
        // clear(e) {
        //     this.triggerEvent('clear')
        // },
        // /**
        //  * @method 关闭
        //  */
        // close(e) {
        //     this.setData({show:false,})
        // },
        toPay(){
            this.triggerEvent('pay')
        },
        cart() {
            this.triggerEvent('cart')
        },
    }
})
