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

        isOperate: { type: Boolean, value: false }, // 是否做add和cut操作
        isFold: { type: Boolean, value: false }, // 是否折叠
    }, 
    options: { styleIsolation: 'apply-shared'},
    // 监听器
    observers: {
        // // 监听list， 生成产品菜单的高度信息
        // 'order': function (order) {
        //     // var productViewList = []
        // },
    },
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
         * @method 增加
         */
        add(e) {
            console.log(e.currentTarget.dataset.key)
            this.triggerEvent('add', e.currentTarget.dataset.key)
        },
        /**
         * @method 减少
         */
        cut(e) {
            console.log(e.currentTarget.dataset.key)
            this.triggerEvent('cut', e.currentTarget.dataset.key)
        },

    }
})
