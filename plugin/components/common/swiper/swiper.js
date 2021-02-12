// components/bar/bar.js
// var app = getApp()

/**
 *  完整样例
 *  <common-swiper list="{{swiperList}}" isBottom="{{true}}" bottomColor="#ffffff" bindclick="clickSwiper" ></common-swiper>
    
    点击事件样例
    clickSwiper(e){
        var index = e.detail
        wx.navigateTo({ url: this.data.swiperList[index].page })
    },

 *  list 样例
 * [
    {
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
        id: 4,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
        id: 5,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
        id: 6,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }
 * ]
 * 
 

 */
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // dialogShow:true,

        list:{
            type:Array,
            value: [
                
            ]
        },
        
        isBottom:{
            type: Boolean,
            value: false,
        },
        bottomColor:{
            type:String,
            value:"#ffffff"
        }
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
        
        clickItem(e){
            console.log(e.currentTarget.dataset.index)
            // this.triggerEvent('success', "abc")
            var index = e.currentTarget.dataset.index
            this.triggerEvent('click', index)
            // this.data.list[index].fn()

        },
    }
})
