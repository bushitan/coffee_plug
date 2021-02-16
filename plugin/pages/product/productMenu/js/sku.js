
var Lock = false
module.exports = Behavior({

    // 监听器
    observers: {
        // 监听list， 生成产品菜单的产品信息
        'product': function (product) {
            if (!product)
                return
            var temp = []
            for (var i = 0; i < product.attributes.length; i++)
                temp.push(0)
            this.setData({ select: temp })

            this.getSKUKey() // 更新key
            this.changePrice()//修改价格
            //设置默认sku
            // this.changeSKU(0, 0) //点击第一个SKU,触发价格修改
        },
        // "categoryIndex": function (categoryIndex){
        //     console.log("categoryIndex:", categoryIndex)
        // }
    },
    methods: {

        /******SKU操作功能******/
        // 点击“选规格”
        clickProduct(e) {
            var categoryIndex = e.detail.categoryIndex
            var productIndex = e.detail.productIndex

            this.setData({
                categoryIndex: e.detail.categoryIndex,
                productIndex: e.detail.productIndex,
                showProduct: true,
            })
        },
        // 增加
        add(e) {
            this.changeSelectMap(e.detail, true)
            this.changeCart()
        },
        // 减少
        cut(e) {
            this.changeSelectMap(e.detail, false)
            this.changeCart()
        },

        // 修改购物车数据
        // var productKey = this.data.categoryIndex + "_" + this.data.productIndex + "_"
        // var key = productKey + skuKey
        changeSelectMap(skuKey, isAdd) {

            if(Lock == true)
                return
            console.log(skuKey)
            var key = skuKey
            var selectMap = this.data.selectMap
            
            // // 没有参数,退出
            if (selectMap.hasOwnProperty(key) == false && isAdd == false)
                return

            if (isAdd) {
                selectMap[key] = selectMap[key] || 0
                selectMap[key]++
            } else {
                selectMap[key]--
                if (selectMap[key] <= 0)
                    delete selectMap[key]
                // selectMap[key] = selectMap[key] > 0 ? selectMap[key] : 0
            }
            this.setData({
                selectMap: selectMap
            })
            Lock = false
        },
    }
})