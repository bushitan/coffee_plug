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

        currentItem: { type: Object },
        order: { type: Object },
        show: { type: Boolean, value: true }, //是否展示
        // size: { type: String, value: "sm" }, 
        isMirror: { type: Boolean, value: false }, // 是否镜像
        height: { type: String, value:" 90vh"  }, // 是否镜像
    }, 
    options: { styleIsolation: 'apply-shared'},
    /**
     * 组件的初始数据
     */
    data: {
        // CustomBar:62
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
