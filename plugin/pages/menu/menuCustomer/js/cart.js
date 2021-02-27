module.exports = Behavior({

    methods: {


        /********修改购物车*******/
        /**
         * TODO
         * 1 获取SKU的详细描述
         * 2 计算SKU的价格
         * 3 生成对象
         */
        // 拼装购物车
        changeCart() {
            var selectMap = this.data.selectMap
            var cartList = []
            for (var key in selectMap) {
                var attPrice = this.getSelectAttPrice(key)

                var temp = key.split("_")
                var categoryIndex = temp[0]
                var productIndex = temp[1]
                var product = this.data.ProductData[categoryIndex].products[productIndex]

                cartList.push({
                    key: key,
                    categoryIndex: categoryIndex,
                    productIndex: productIndex,
                    ProductId: product.id,
                    Quantity: selectMap[key],
                    skuDesc: attPrice.skuDesc,
                    cover: product.imgs[0].src || "",
                    name: product.name,
                    price: attPrice.price,
                })
            }

            this.setData({ cartList: cartList })

            if(cartList.length<= 0 )    
                this.setData({ showCart:false,})
        },

        // 计算价格和属性
        getSelectAttPrice(key) {
            // key.pop()
            var list = key.split("_")
            list.pop()
            var categoryIndex = list.shift()
            var productIndex = list.shift()
            var product = this.data.ProductData[categoryIndex].products[productIndex]

            var price = product.price
            var skuDesc = ""
            // 价格计算
            for (var i = 0; i < list.length; i = i + 2) {
                var attIndex = list[i]
                var valueIndex = list[i + 1]
                try {
                    var att = product.attributes[attIndex] 
                    var value = product.attributes[attIndex].attributeValues[valueIndex]
                    if (!value)
                        continue
                } catch{
                    continue
                }
                price += value.cost
                skuDesc += att.productAttributeName + "【"+value.name + "】"

                // 中间加逗号
                if (i < list.length-2)
                    skuDesc += "，"
                
            }

            return {
                price: price,
                skuDesc: skuDesc,
            }
        },

        // 清理购物车
        clearCart(){
            wx.showModal({
                title: '是否清空购物车?',
                success:res=>{
                    if(res.confirm){
                        this.setData({
                            selectMap: {},
                            showCart:false,
                        })
                        this.changeCart()
                    }
                }
                
            })
        },
        // 打开购物车
        openCart() {
            this.setData({
                showCart: true,
            })
        },

    }
})