/**
 

    模型
    <coupon-list list="{{couponList}}"></coupon-list>

    数据
    
 */
var mapContext 
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: { type: Array},
       
    }, 
    options: { styleIsolation: 'apply-shared'},
    /**
     * 组件的初始数据
     */
    data: {

    },

    ready(){
        mapContext = wx.createMapContext('map', this);
    },
    /**
     * 组件的方法列表
     */
    methods: {
        
        click(e){
            this.triggerEvent('click', e.currentTarget.dataset.index)
        },


        /**
         * @method 将门店列表放入map
         */
        setStoreListToMap(list) {
            var tempList = []
            // debugger
            for (var i = 0; i < list.length; i++) {
                var marker = list[i]
                var obj = {
                    iconPath: this.data.brandList[this.data.brandIndex].icon,
                    id: i,
                    longitude: marker.location.coordinates[0],
                    latitude: marker.location.coordinates[1],
                    width: 40,
                    height: 40,
                    label: {
                        content: marker.name,
                        color: "#666666",

                    },
                }
                if (this.data.brandList[this.data.brandIndex].callout.length > 0) {
                    obj.callout = {
                        content: this.data.brandList[this.data.brandIndex].callout,
                        color: "#ffffff",
                        bgColor: this.data.brandList[this.data.brandIndex].calloutBgColor || "#efaf30",
                        display: "ALWAYS",
                        padding: 5,
                    }
                }
                tempList.push(obj)
            }
            console.log(tempList)
            this.setData({
                poiMarkers: tempList,
                storeList: list,
            })

            // this.getMapRange(tempList)

        },


        getMapRange(tempList) {
            // var arr = [];

            // for (var i = 1; i <= 100; i++) {
            //     arr.push(i);
            // }

            tempList.sort(
                function () {
                    return 0.5 - Math.random();
                }
            );

            // arr.lenth = 10;
            var points = [tempList[0], tempList[1],]

            console.log(
                points
            );

            mapContext.includePoints({
                padding: [100, 80, 100, 80],
                // padding: [40, 40, 40, 40],
                points: points, //放入所有坐标轴的数组   并引用此方法
                success: (res) => {
                    console.log(res)
                },
                fail: (res) => {
                    console.log(res)
                },
            }, this)
        },

        // 获取品牌列表


    }
})
