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

        product: { type: Object },
        selectMap: { type: Object },
        // order: { type: Object },
        show: { type: Boolean, value: true }, //是否展示
        // size: { type: String, value: "sm" }, 
        isMirror: { type: Boolean, value: false }, // 是否镜像
        height: { type: String, value:" 90vh"  }, // 是否镜像

        categoryIndex: { type: Number, value: -1 },
        productIndex: { type: Number, value: -1 },
    }, 
    options: { styleIsolation: 'apply-shared'},
    // 监听器
    observers: {
        // 监听list， 生成产品菜单的产品信息
        'product': function (product) {
            if (!product)
                return 
            var temp = []
            for (var i = 0 ; i < product.attributes.length;i++)
                temp.push(0)
            this.setData({ select: temp})

            this.getSKUKey() // 更新key
            this.changePrice()//修改价格
             //设置默认sku
            // this.changeSKU(0, 0) //点击第一个SKU,触发价格修改
        },
        // "categoryIndex": function (categoryIndex){
        //     console.log("categoryIndex:", categoryIndex)
        // }
    },
    /**
     * 组件的初始数据
     */
    data: {
        select:[] , // 当前的选择
        selectPrice: "" , // 当前sku的价格
        currentSKUKey:"",
    },

    /**
     * 组件的方法列表
     */
    methods: {
        
        //选择sku
        clickSKU(e) { 
            // 修改当前的SKU
            var attIndex = e.currentTarget.dataset.attindex
            var valueIndex = e.currentTarget.dataset.valueindex    
            // 修改选择的SKU
            var select = this.data.select
            select[attIndex] = valueIndex
            this.setData({
                select: select,
            })

            this.changePrice()     
            this.getSKUKey()
        },

        // 修改价格,根据当前的SKU情况,计算价格.没有SKU,则以原始price为准
        changePrice(){
            // 计算所有SKU的价格
            var product = this.data.product
            var selectPrice = product.price
            var select = this.data.select
            for (var i = 0; i < select.length; i++) {
                var j = select[i]
                try {
                    var value = product.attributes[i].attributeValues[j]
                    if (!value)
                        continue
                } catch{
                    continue
                }
                selectPrice += value.cost || 0
            }
            this.setData({ selectPrice: selectPrice })
        },

        // 获取SKU的key
        getSKUKey(){
            var select = this.data.select
            var key = this.data.categoryIndex + "_" + this.data.productIndex + "_"  // 类目的key
            for (var i = 0; i < select.length ;i++){
                var j = select[i]
                key += i + "_" + j + "_"
            }
            this.setData({
                currentSKUKey: key
            })
            return key
        },

        //增加
        add() {
            var key = this.getSKUKey()
            this.triggerEvent('add', key)
         },
        //减少
        cut() {
            var key = this.getSKUKey()
            this.triggerEvent('cut', key)
        },


    }
})
