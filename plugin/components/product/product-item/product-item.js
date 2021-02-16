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
        name: { type: String, value: "" },
        image: { type: String, value: "" },
        sku: { type: String, value: "" },
        price: { type: String, value: "" },
        count: { type: String, value: "" },

        // product: { type: Object },
        // show: { type: Boolean, value: true }, //是否展示
        // // size: { type: String, value: "sm" }, 
        // isMirror: { type: Boolean, value: false }, // 是否镜像
        // height: { type: String, value:" 90vh"  }, // 是否镜像
    }, 
    options: { styleIsolation: 'apply-shared'},
    /**
     * 组件的初始数据
     */
    data: {
        // CustomBar:62
        // swiperList:[],
    },
    // 监听器
    // observers: {
    //     // 监听list， 生成产品菜单的高度信息
    //     'product': function (product) {
            

    //         var swiperList = []
    //         var imgs = product.imgs
    //         for(var i = 0 ; i<imgs.length;i++){
    //             swiperList.push({
    //                 id: i,
    //                 type: 'image',
    //                 url: product.imgs[i].src
    //             })
    //         }
    //         this.setData({ swiperList: swiperList})
    //     },
    // },
    ready(){
        console.log("item product")
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
