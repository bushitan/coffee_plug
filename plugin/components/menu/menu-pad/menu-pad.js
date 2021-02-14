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
        list: { type: Array },
        order: { type: Object },

        topSpace: { type: Number, value: "100rpx" },
        isCustom: { type: Boolean, value: false },
        isMirror: { type: Boolean, value: false },

        type: { type: Number, value: 1 }, // 1订单   2入库  3盘点

        btnText:{ type: String, value: "选规格" },
    }, 
    options: { styleIsolation: 'apply-shared'},
    /**
     * 组件的初始数据
     */
    data: {
        load: true,
        // tabCur: 0,
        productViewList: [], // 各个产品目录的view 宽度、高度参数
        productScrollTop: 0, // 产品页面距离顶部scroll的高度
        TabCur: 0,
        MainCur: 0,
        VerticalNavTop: 100,
        orderObj: {},
    },
    // 监听器
    observers: {
        // 监听list， 生成产品菜单的高度信息
        'list': function (list) {
            // var productViewList = []

            for (let i = 0; i < list.length; i++) {
                let view = this.createSelectorQuery().select("#main-" + list[i].id);
                this.setData({ productViewList: [] })
                view.fields({
                    size: true
                }, data => {
                    if (data) {
                        var productViewList = this.data.productViewList
                        if (productViewList.length == 0)
                            data.top = 0
                        else
                            data.top = productViewList[productViewList.length - 1].top + productViewList[productViewList.length - 1].height
                        productViewList.push(data)
                        this.setData({ productViewList: productViewList })
                        // console.log(productViewList)
                    }
                }).exec();
            }
        },

        // 监测购物车数据，同步到已选数量
        'order': function (order) {
            var temp = {}
            for (var key in order) {
                var i = key.split("_")[0]
                var j = key.split("_")[1]
                var newKey = i + "_" + j
                temp[newKey] = temp[newKey] || 0 //防止数量为0
                temp[newKey] = temp[newKey] + order[key].Quantity
            }
            this.setData({ orderObj: temp })
            console.log(temp)
        }
    },
    ready(){
    },
    /**
     * 组件的方法列表
     */
    methods: {

        openDetail(e) {
            console.log(e.currentTarget.dataset.categoryindex, e.currentTarget.dataset.itemIndex)
        },
        /**
         * @method 点击左边，让右边滚动
         */
        tabSelect(e) {
            this.setData({
                TabCur: e.currentTarget.dataset.id,
                MainCur: e.currentTarget.dataset.id,
                VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50,
                productScrollTop: this.data.productViewList[e.currentTarget.dataset.id].top,
            })

            console.log(this.data.MainCur)
        },
        /**
         * @method 右边滚动，触发计算左边位置
         */
        VerticalMain(e) {
            
            let that = this;
            let list = this.data.list;
            let tabHeight = 0;
            if (this.data.load) {

                for (let i = 0; i < list.length; i++) {
                    let view = this.createSelectorQuery().select("#main-" + list[i].id);
                    view.fields({
                        size: true
                    }, data => {
                        // console.log(data)
                        list[i].top = tabHeight;
                        tabHeight = tabHeight + data.height;
                        list[i].bottom = tabHeight;
                    }).exec();
                }
                that.setData({
                    load: false,
                    list: list
                })
            }
            let scrollTop = e.detail.scrollTop + 20;
            for (let i = 0; i < list.length; i++) {
                if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
                    that.setData({
                        VerticalNavTop: (list[i].id - 1) * 50,
                        TabCur: list[i].id
                    })
                    console.log(that.data.TabCur)
                    return false
                }
            }
        }

    }
})
