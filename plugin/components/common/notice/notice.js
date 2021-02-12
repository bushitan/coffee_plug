/**
 *  完整样例
    <notice icon="commentfill" text="禁止换行111以禁止换行，超出容器部分会以禁止换行，超出容器部分会以" isShadow="{{!true}}" bindclick="clickNotice" ></notice>
 *
    clickNotice(){ console.log('notice') },
 */
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        icon: {
            type: String,
            value: "commentfill"
        }, 
        text:{
            type:String,
            value:""
        },
        isShadow: {
            type: Boolean,
            value: false
        },
    },
    // behaviors: [app.behaviors.config],
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
            this.triggerEvent('click')

        },
    }
})
