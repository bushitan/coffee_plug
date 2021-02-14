// components/bar/bar.js
// var app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {

        
        title:{
            type: String,
            value: "标题"
        },
        showCancel:{
            type: Boolean,
            value: true
        },
        textCancel:{
            type: String,
            value: "取消"
        },
        textConfirm:{
            type: String,
            value: "确认"
        },
        show:{
            type: Boolean,
            value: false
        },

        showTop: { type: Boolean, value: true },
        showBottom: { type: Boolean, value: true },

        // 主动关闭按钮
        showAutoClose: { type: Boolean, value: !false },
        autoCloseText: { type: String, value: "text-white" },
    },
    // behaviors: [app.behaviors.config],
    options: { styleIsolation: 'apply-shared', multipleSlots: true },
    /**
     * 组件的初始数据
     */
    data: {

        // dialogShow:true,

    },

    /**
     * 组件的方法列表
     */
    methods: {
        tabSelect(e) {
            this.setData({
                TabCur: e.currentTarget.dataset.id,
                scrollLeft: (e.currentTarget.dataset.id-1)*60
            })
        },

        hideModal(){
            this.setData({show:false})
        },

        clickConfirm(){
            this.hideModal
            this.triggerEvent('success', "abc")
        },

    }
})
