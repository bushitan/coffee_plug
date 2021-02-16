/**
 *  完整样例
   

    <item  title="title" desc="desc" isIcon="{{true}}" isArrow="{{true}}" catchtap="clickItem" customClass="bg-white text-xl padding">
        <view class="cu-tag" slot="title">拉拉阿拉</view>
        <view class="cu-tag" slot="desc">哈哈哈</view>
    </item>

 */
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        customClass: { type: String, value: "" },
        icon: { type: String, value: "" },  //commentfill
        title: { type: String, value: "" },
        desc: { type: String, value: "" },

        // isIcon: { type: Boolean, value: true },
        isArrow: { type: Boolean, value: false },
        iconClass: { type: String, value: "theme-text" },
        titleClass: { type: String, value: "text-black" },
        descClass: { type: String, value: "text-gray" },
        arrowClass: { type: String, value: "text-gray" },
    },
    // behaviors: [app.behaviors.config],
    options: { styleIsolation: 'apply-shared' ,multipleSlots:true,},
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
            this.triggerEvent('tap')

        },
    }
})
