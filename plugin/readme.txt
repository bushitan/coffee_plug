基本规则

1、列表和订单 或者  订单和状态 ：每个页面，最多只能存在二维关系。。

导航bar、订单列表、订单：三维关系的页面，必须拆解页面成二维——导航维度x组件维度，以组件或者include的方式，在组件维度内，在包含剩下的二维关系。

菜单类别、产品、 属性、SKU值：四维关系，优先拆解成两个二维关系——组件（菜单x产品） + 组件（属性xSKU值）， 每个组件是一个单独的二维关系。
组件之间必须解耦，以组合的方式存在，互不影响。

底部tabbar、顶部导航bar、订单列表、订单、产品列表、产品：六维关系，组件tabbar x 组件bar + 组件订单列表 x 订单（产品列表 x 产品）


2、在page中调用的组件，内部最多包含一个二维数据，根据条件1，一个页面智能存在二维关系，组件x组件=四维数据。。。四维数据为一个页面耦合情况的最高数据层级
组件，从页面至叶子节点，页面调用1个组件，叶子节点item组件，中间最多2层组件，作为关系对应。
page（nav） -> list -> item √
page（nav） -> list -> item √

page（bar） -> order-customer-list -> order-item -> product-cart -> product-item ×

page（bar） -> order-customer-list -> orderItem  
                                   -> product-cart -> productItem √



components  插件目录

-- common 基础
---- dialog 普通弹框 √
---- dialog-cover 海报弹框 √
---- swiper 轮播图 √
---- notice 信息条 √

-- nav 导航
---- nav 普通自定义导航【含返回】×
---- nav-date 时间选择导航 √

-- tabbar栏目
---- tabbar-top 普通选择栏目 √
---- tabbar-date 按时间分类选择栏目 √
---- tabbar 底部栏目分类选项 √

-- card 卡片
---- card-image 图文卡片  √
---- card-text 纯文字卡片 ×
---- card-video 视频卡片 ×

-- menu 菜单
---- menu-phone 点单矩阵，菜单-产品列表【仅仅做展示数据，不含数量增减操作】√
---- menu-pad  pad的点单矩阵，菜单-产品列表【仅仅做展示数据，不含数量增减操作】√

-- product 产品
---- product-detail 产品详情页, 【仅仅做展示数据】√
---- product-sku 产品SKU 【SKU添加、取消操作】√
---- product-cart 购物车，已选产品 【加减数据按钮，返回inde，由页面操作】√
---- product-bar 菜单底部操作栏目【打开购物车，当前金额，去下单】√
---- product-item 订单的节点【提供购物车和订单详情使用】√
---- product-list 产品列表【仅仅展示产品以及价格。】 

-- order 订单
---- order-detail 订单详情【仅仅展示数据，不含退款、扫码操作】√  取消
---- order-customer  用户查看订单的原子节点【仅仅做数据展示】√  取消
---- order-mall 商城订单的原子节点【仅仅做数据展示】√     取消
---- order-scan 扫码订单的原子节点【仅仅做数据展示】√    取消

---- order-customer-item 顾客订单节点√   
---- order-customer-list  顾客订单列表√   
---- order-seller-item 商户订单节点√   
---- order-seller-list  商户订单列表√   

-- coupon 优惠券
---- coupon-detail 订单详情【仅仅展示优惠券的详细信息】 ×
---- coupon-node 优惠券的原子节点【仅仅做数据展示】 √
---- coupon-item 优惠券的原子节点【仅仅做数据展示】 √
---- coupon-list 优惠券列表【仅仅做数据展示】 √

-- store 门店
---- store-list 订单详情【仅仅展示数据，拨打电话，导航，不含点击门店后的行为】 ×
---- store-item 门店的的原子节点【仅仅做数据展示】√
---- store-map 门店地图【小杯子的地图】


-- form 常用的form表单
---- form-date 选择【年度,月份,日期,时间】 √

pages  组件目录
-- product 产品相关
---- productMenu 自助点单，自助点单页面 √
          page -> menu-phone  
               -> dialog
               -> product-detail -> common-swiper
               -> product-sku 
               -> product-list -> product-item
               -> product-bar

---- productConfirm 订单确认 √
          page -> menu-phone  
               -> product-list
               -> item

-- order 订单
---- orderList 订单列表√
          page -> order-customer-list -> order-customer-item  
                                      -> product-list -> product-item

---- orderDetail 订单详情 √
          page -> product-list -> product-item  
               -> item 


--store
----storeList 门店列表√
        page -> store-list -> store-item
             -> store-map    

--coupon
----couponList√
        page -> coupon-list -> coupon-item

--gift
----giftList√
        page -> gift-list -> gift-item

--score
----scoreList  √  
        page -> score-list -> score-item



小程序目录
页面 
--route

--main 
----index
------menuCustomer
--------orderCustomerConfirm
----------pay
------menuGift
----curent
------orderCustomerDetail
----my
------orderCustomerList
--------orderCustomerDetail
----------pay
------scoreList
------couponList
------giftList
--------giftDetail
















