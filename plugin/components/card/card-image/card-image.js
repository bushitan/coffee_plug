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
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        image: {
            type: String,
            value: ""
        },

        name: {
            type: String,
            value:""
        }, 
        
        desc: {
            type: String,
            value: ""
        }, 
        summary:{
            type:String,
            value:""
        },
        // isShadow: {
        //     type: Boolean,
        //     value: false
        // },
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
        
        // click(e){
        //     this.triggerEvent('click')

        // },
    }
})
