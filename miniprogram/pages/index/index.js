var  liteCupPlugin
var app = getApp()
var GP 

var ProductData = require("../../data/product.js")
var MenuCartData = require("../../data/menu-cart.js")
var CurrentItem = require("../../data/currentItem.js")
var ClickBehaviors = require("js/click.js")
Page({

    behaviors: [ClickBehaviors],
    data: {
        items: [],
        currentItem: 0,
        userToken:"sdhfjks212312",


        swiperList:[
            {
                id: 0,
                type: 'image',
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
                page:"/pages/test/test"
               
            }, {
                id: 1,
                type: 'image',
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
                page: ""
            }
        ],

        carArtList:[
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

        couponList:[
            {
                id: 0,
                name: '周边商品8.8折',
                desc: '5元优惠券满50.00元使用',
                startTime: '2019.1.6',
                endTime: '2019.2.1',
                discount:"8.8折",
                page: "",
            },

            {
                id: 0,
                name: '周边商品8.8折',
                desc: '5元优惠券满50.00元使用',
                startTime: '2019.1.6',
                endTime: '2019.2.1',
                discount: "8.8折",
                page: "",
            },

        ],



        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        Custom: app.globalData.Custom,

        barList: [
            { name: "待处理", id: 11 }, { name: "处理中", id: 12 }, { name: "已完成", id: 13 }, { name: "已取消", id: 14 },
        ],

        tabbarIndex:0,
        // 菜单矩阵
        tabMatrix : [
            {
                name: "外卖",
                select: "/images/icon/score.png",
                unSelect: "/images/icon/score_un.png",
                list: [
                    { name: "待处理", id: 11 }, { name: "处理中", id: 12 }, { name: "已完成", id: 13 }, { name: "已取消", id: 14 },
                ]
            },
            {
                name: "小商店",
                select: "/images/icon/mall.png",
                unSelect: "/images/icon/mall_un.png",
                list: [
                    { name: "待处理", id: 21 }, { name: "已核销", id: 22 }, { name: "已取消", id: 23 },
                ]
            },
            {
                name: "优惠GO",
                select: "/images/icon/mall.png",
                unSelect: "/images/icon/mall_un.png",
                list: [
                    { name: "已付款", id: 31 },
                ]
            }
        ],

        storeList:[
            {
                name:"Seeking鲤湾店",
                address:"南宁市青秀区鲤湾路56号",
                status: "休息中",
                startTime: "07:30",
                endTime: "21:45",
            },
            {
                name: "Seeking金源店",
                address: "南宁市金源CBD",
                status: "休息中",
                startTime: "07:30",
                endTime: "21:45",
            }
        ],

        orderMallList: 
        [{
            "id": 4888,
            "guid": "a90be2f9-87d6-4e29-adf4-dad843d5628e",
            "store_id": 15,
            "store_name": "Seeking Coffee【桃源店】",
            "pick_up_in_store": true,
            "pickup_address": null,
            "order_discount": 0,
            "order_total": 33,
            "order_without_discount": 33,
            "order_discount_total": 0,
            "order_with_discount": 33,
            "refunded_amount": 0,
            "reward_points_were_added": false,
            "checkout_attribute_description": "Gift wrapping: No",
            "created_on_utc": "2021-01-06 12:36:59",
            "order_notes": [],
            "shipments": [],
            "shipment_desc": "",
            "customertaketype": 4,
            "ship_method": "EatInStore",
            "ship_method_desc": "堂食",
            "shipping_status_val": 10,
            "shipping_status_code": 10,
            "shipping_status": "无需配送",
            "ship_address": {
                "id": 6610,
                "phonenumber": "",
                "name": "",
                "addr_detail": "桃源路62号",
                "company": "seeking【桃源店】",
                "fax_number": ""
            },
            "payment_status_val": 10,
            "payment_status_code": 10,
            "payment_status": "待支付",
            "payment_method_systemName": "Payments.WeixinPay",
            "paid_dateutc": null,
            "order_status": "待处理",
            "order_status_val": 10,
            "order_status_code": 10,
            "order_attr_desc": "Gift wrapping: No",
            "ship_total_fee": 0,
            "ship_discount": 0,
            "wm_cost": 0,
            "total_weight": 0,
            "store_take_ship_fee": 0,
            "customer_take_ship_fee": 0,
            "total_distance": null,
            "wish_datetime": "0001-01-01 00:00",
            "customer": {
                "id": 24367,
                "name": "",
                "wxopenid": "oiHv-4zodWhbmSEd6xV_2zY-3Olg",
                "username": "oiHv-4zodWhbmSEd6xV_2zY-3Olg",
                "email": "24367@163.com",
                "wxAvatarUrl": "",
                "wxNickName": "",
                "customer_guid": "42d64cbf-bd30-468f-abbe-bb4e9b0d27d6"
            },
            "order_items": [
                {
                "attr_desc": "甜度: 无糖",
                "attr": [
                    {
                    "id": 137,
                    "value": "225"
                    }
                ],
                "discount_amount_excl_tax": 0,
                "discount_amount_incl_tax": 0,
                "id": 5024,
                "item_weight": 0,
                "original_product_cost": 0,
                "price_excl_tax": 33,
                "price_incl_tax": 33,
                "wm_cost": 0,
                "product": {
                    "display_order": 0,
                    "display_stock_availability": false,
                    "display_stock_quantity": false,
                    "full_description": "",
                    "height": 0,
                    "id": 178,
                    "images": [
                    "https://wm.51zfgx.com/images/thumbs/0000212_12-oz.jpeg"
                    ],
                    "is_free_shipping": false,
                    "is_gift_card": false,
                    "is_recurring": false,
                    "is_rental": false,
                    "is_ship_enabled": true,
                    "length": 0,
                    "width": 0,
                    "min_stock_quantity": 0,
                    "name": "热低脂燕麦拿铁（12 OZ）",
                    "price": 33,
                    "old_price": 0,
                    "sku": null,
                    "stock_quantity": 9999,
                    "short_description": "",
                    "tags": [
                    "oatly低脂燕麦奶"
                    ],
                    "special_price": 33,
                    "weight": 0,
                    "wmCost": 0
                },
                "productId": 178,
                "quantity": 1,
                "rental_enddate_tc": null,
                "rental_startdate_utc": null,
                "unit_price_exclTax": 33,
                "unit_price_inclTax": 33
                }
            ]
        }],
   
        orderNumberList:[
            {
                "RowNo": 1,
                "OrderId": 7242,
                "ShopId": 15,
                "WxOpenId": "ok6Wq5X-Weozyh2dANp6Bbs6x66I",
                "WxNickName": "",
                "WxAvatarUrl": "",
                "CardOutOrderNo": "20210114085047BgxpmsLORJ16418894",
                "TotalFee": 58,
                "RealFee": 51.04,
                "DiscountFee": 6.96,
                "PayTime": "2021-01-14 08:51:07"
            },
            {
                "RowNo": 2,
                "OrderId": 7233,
                "ShopId": 15,
                "WxOpenId": "ok6Wq5QncfLrwlACBrjQgqH9305Q",
                "WxNickName": "",
                "WxAvatarUrl": "",
                "CardOutOrderNo": "20210113141600Oi3XFeGl0A87362898",
                "TotalFee": 22,
                "RealFee": 19.36,
                "DiscountFee": 2.64,
                "PayTime": "2021-01-13 14:16:29"
            },
        ],


        /**menu数据 */
        menuList: ProductData,
        menuCart: MenuCartData,
        CurrentItem: CurrentItem,
    },

    // 点击轮播图
    clickSwiper(e){
        var index = e.detail
        wx.navigateTo({ url: this.data.swiperList[index].page })
    },

    clickNotice(){ console.log('notice') },
    
    clickCoupon(e){
        var index = e.detail
        // console.log(index)
        // TODO 执行细则
        // wx.navigateTo({ url: this.data.couponList[index].page })
    },

    clickCard(e){
        console.log(e.currentTarget.dataset.index)
    },


    submitStore(e){
        console.log(e.detail)
    },

    onLoad() {
        GP = this 
        app.db.org.SearchOrgWxClientInfos().then(res => {
            // console.log(res)
        }).catch(res=>{
            // console.log(res)
        })


      // plugin.sayHello()
      // const world = plugin.answer

        // liteCupPlugin = requirePlugin('liteCupPlugin')

        // console.log(liteCupPlugin.admin.org.AddShopBranch)
        

        // liteCupPlugin.admin.org.AddShopBranch().then(res => {
        //     console.log(res)

        // }).catch(res=>{
        //     console.log(res)
        // })

        // var res = await liteCupPlugin.admin.org.login() 
        // console.log(res)
        // liteCupPlugin.sayHello()

      
      // var a = wx.setStorageSync('say',457834)
      // console.log(a)


      
      var a = wx.getStorageSync('say')
    //   console.log(a)

    },


    addItem() {
        this.data.items.push(this.data.currentItem++)
        this.setData({
        items: this.data.items,
            currentItem: this.data.currentItem
        })
    }
})
