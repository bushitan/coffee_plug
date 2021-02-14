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
        show: { type: Boolean, value: false }, //是否展示
        // size: { type: String, value: "sm" }, 
        isMirror: { type: Boolean, value: false }, // 是否镜像
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

        /**
         * @method 清空
         */
        clear(e) {
            this.triggerEvent('clear')
        },
        /**
         * @method 关闭
         */
        close(e) {
            this.setData({show:false,})
        },

    }
})
